import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import { usePokemon } from 'context/PokemonsContext';

import Header from 'components/Header';
import { PokemonType } from 'components/Types/PokemonType';

import { unslugify } from 'helpers';

import useTitle from 'hooks/useTitle';

import './styles.css';
import { Text } from './styles';

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

const Home: React.FC = () => {
  const setTitle = useTitle();

  const { pokemons, loading, hasMorePages, fetchNextPage } = usePokemon();

  useEffect(() => {
    setTitle('Pokemon');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  {
  id: 1,
  name: 'bulbasaurs',
  color:'green',
  types: ['grass', 'poison'],
  image: 'https://www.'
  }
  */

  return (
    <>
      <Header />
      <Container className="d-flex">
        {loading && pokemons.length === 0 && <p>Loading...</p>}
        <div>
          {pokemons.length > 0 && (
            <InfiniteScroll
              dataLength={pokemons.length}
              next={fetchNextPage}
              hasMore={hasMorePages}
              loader={<h4>Loading...</h4>}
              style={{ overflow: 'visible' }}
            >
              <Row className="img-fluid row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4  g-3 justify-content-center">
                {pokemons.map((pokemon) => (
                  <div
                    className="card"
                    key={pokemon.id}
                    style={{
                      margin: 10,
                      backgroundColor: colors[pokemon.color]
                        ? colors[pokemon.color]
                        : colors.default,
                    }}
                  >
                    <Col>
                      <h2 />
                    </Col>
                  </div>
                ))}
              </Row>
            </InfiniteScroll>
          )}
        </div>
      </Container>
    </>
  );
};

export default memo(Home);
