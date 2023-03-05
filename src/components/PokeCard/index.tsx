import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { PokemonType } from 'components/Types/PokemonType';

interface IPokeCardsProps {
  pokemon: PokemonType;
}
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
const PokeCard: React.FC<IPokeCardsProps> = ({ pokemon }) => (
  <div>
    <Card>
      key={pokemon.id}
      style=
      {{
        margin: 10,
        backgroundColor: colors[pokemon.color]
          ? colors[pokemon.color]
          : colors.default,
      }}
    </Card>
  </div>
);
export default memo(PokeCard);
