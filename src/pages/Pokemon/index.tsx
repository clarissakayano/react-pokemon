import { memo, useEffect } from 'react';

import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import { usePokemon } from 'context/PokemonsContext';

import PokemonCard from 'components/PokemonCard';
import { PokemonType } from 'components/Types/PokemonType';

import { unslugify } from 'helpers';

import useTitle from 'hooks/useTitle';

type GQLDataType = {
  results: PokemonType[];
};

type colorsType = {
  [index: string]: string;
};

const colors: colorsType = {
  blue: '#77bdfe',
  green: '#48d0b0',
  red: '#fb6c6c',
  black: '#000000',
  yellow: '#ffd86f',
  brown: '#c0392b',
  purple: '#a29bfe',
  pink: '#fd79a8',
  gray: '#636e72',
  default: '#494949',
  white: '#eee',
};
const fontColors: colorsType = {
  default: '#fff',
  white: '#333',
};

const Pokemon: React.FC = () => {
  const setTitle = useTitle();

  const { name } = useParams();
  const { pokemon, pokemonLoading, fetchPokemon } = usePokemon();

  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  useEffect(() => {
    fetchPokemon({ variables: { name } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('POKEMON', pokemon);
  return (
    <Container>
      <Link to="/">Back</Link>
      <h1>{unslugify(String(name))}</h1>
      {pokemonLoading && <p>Loading...</p>}
      {!pokemonLoading && pokemon && (
        <div>
          {pokemon.types.map((type) => (
            <div key={type}>{unslugify(type)}</div>
          ))}

          <h2 className="d-flex justify-content-end mt-5 my-5">
            {unslugify(pokemon.pokedexIndex)}
          </h2>

          {pokemon.image && (
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{
                margin: 10,
                backgroundColor: colors[pokemon.color]
                  ? colors[pokemon.color]
                  : colors.default,
              }}
            />
          )}

          <div className="container">
            {pokemon.description && <p>{pokemon.description}</p>}
            <p>{pokemon.color}</p>
            {pokemon.move && <p>Move: {unslugify(pokemon.move)}</p>}
            <Row>
              <p>Stats:</p>
              <Col>
                {pokemon.stats?.map((stat) => (
                  <li key={stat.name}>
                    {unslugify(stat.name)}:{stat.value}
                    <ProgressBar animated now={stat.value} />
                  </li>
                ))}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

export default memo(Pokemon);
