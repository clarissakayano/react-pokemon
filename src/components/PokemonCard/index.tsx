import React, { memo } from 'react';

import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PokemonType } from 'components/Types/PokemonType';

import { unslugify } from 'helpers';

interface IPokemonCardProps {
  pokemon: PokemonType;
  color: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => (
  <Card className="d-flex flex-column position-relative" color={pokemon.color}>
    <div className="d-flex align-items-end mb-3 mb-md-4">
      <h2 className="flex-grow-1 m-0 pe-2">
        {unslugify(pokemon.name)}({pokemon.pokedexIndex})
      </h2>
      <div>
        <h2 className="d-flex justify-content-end mt-5 my-5">
          {unslugify(pokemon.pokedexIndex)}
        </h2>
      </div>
      {pokemon.description && <p>{pokemon.description}</p>}
      <p>{pokemon.color}</p>
      {pokemon.move && <p>Move: {unslugify(pokemon.move)}</p>}
      <ul>
        {pokemon.types.map((type) => (
          <li key={type}>{unslugify(type)}</li>
        ))}
      </ul>
      <p>Stats:</p>
      <ul>
        {pokemon.stats?.map((stat) => (
          <li key={stat.name}>
            {unslugify(stat.name)}:{' '}
            <ProgressBar variant="danger" now={stat.value} />
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

export default memo(PokemonCard);
