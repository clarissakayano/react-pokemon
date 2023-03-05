import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
  useQuery,
} from '@apollo/client';
import { GET_POKEMONS_QUERY, GET_POKEMON_QUERY } from 'GraphQLQueries';

import {
  PokemonsQueryResultType,
  PokemonType,
} from 'components/Types/PokemonType';

import { normalizePokemonsQueryResults } from './helpers';

interface IContextProps {
  pokemons: PokemonType[];
  pokemon: PokemonType | null;
  loading: boolean;
  pokemonLoading: boolean;
  fetchPokemon: LazyQueryExecFunction<
    PokemonsQueryResultType,
    OperationVariables
  >;
  fetchNextPage: () => void;
  hasMorePages: boolean;
}

interface IPokemonProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

const RESULTS_PER_PAGE = 24;

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true);

  const { data, loading } = useQuery<PokemonsQueryResultType>(
    GET_POKEMONS_QUERY,
    { variables: { limit: RESULTS_PER_PAGE, offset } },
  );

  const fetchNextPage = useCallback(
    () => setOffset((prev) => prev + RESULTS_PER_PAGE),
    [],
  );

  const [fetchPokemon, { data: pokemonData, loading: pokemonLoading }] =
    useLazyQuery<PokemonsQueryResultType>(GET_POKEMON_QUERY);

  useEffect(() => {
    if (!!data && Array.isArray(data.results)) {
      setPokemons((prev) => [
        ...prev,
        ...normalizePokemonsQueryResults(data.results),
      ]);
      if (data.results.length < RESULTS_PER_PAGE) {
        setHasMorePages(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (!!pokemonData && Array.isArray(pokemonData.results)) {
      setPokemon(
        normalizePokemonsQueryResults(pokemonData.results)?.[0] ?? null,
      );
    }
  }, [pokemonData]);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          pokemons,
          pokemon,
          loading,
          pokemonLoading,
          hasMorePages,
          fetchPokemon,
          fetchNextPage,
        }),
        [
          loading,
          pokemon,
          pokemons,
          pokemonLoading,
          hasMorePages,
          fetchPokemon,
          fetchNextPage,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const usePokemon = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePokemon must be within PokemonProvider');
  }

  return context;
};
