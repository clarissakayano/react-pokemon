export type PokemonsQueryResultsArrayType = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  specy: {
    color: {
      name: string;
    };
    gender_rate: number;
    has_gender_differences: boolean;
    descriptions?: { text: string }[];
  };
  types: {
    data: {
      type: {
        name: string;
      };
    }[];
  };
  images: { sprites: string }[];
  moves: { move: { name: string } }[];
  stats?: {
    value: number;
    stat: {
      name: string;
    };
  }[];
};

/* Como vem da API, results: */
export type PokemonsQueryResultType = {
  results: PokemonsQueryResultsArrayType[];
};

export type PokemonType = {
  id: number;
  pokedexIndex: string;
  name: string;
  height?: number;
  weight?: number;
  color: string;
  types: string[]; // ['grass', 'poison']
  image?: string | null;
  gender: { m: number; f: number };
  description?: string;
  move?: string;
  stats?: {
    name: string;
    value: number;
  }[];
};
