import React from 'react';

import { Container, ContainerHeader, Row } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <Row>
          <h1>Marvel Heroes</h1>
        </Row>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
