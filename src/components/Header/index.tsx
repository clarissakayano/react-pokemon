import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import perfil from 'assets/perfil.png';

import { BgHeader } from './styles';

const Header: React.FC = () => (
  <div>
    <BgHeader>
      <Container>
        <Row>
          <Col>
            <div className="mt-5">
              <h1>Olá, Ash Ketchum</h1>
              <p>Bem Vindo!😄</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-end mt-5 my-5">
              <img src={perfil} alt="perfil" width="50px" />
            </div>
          </Col>
        </Row>
      </Container>
    </BgHeader>
    <h2 className="text-center mt-3 mb-5">Qual Pokemon você escolheria?</h2>
  </div>
);

export default memo(Header);
