import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import { Container, ContentSearchBar, ContentMenuBar } from './styles';

const Bar: React.FC = () => {
  return (
    <Container>
      <ContentMenuBar>
        <Link to="/">
          <FiHome size={24} />
          <span>Home</span>
        </Link>
      </ContentMenuBar>
      <ContentSearchBar>
        <span>Busque seu Heroi</span>
        <input type="text" placeholder="Digite aqui o seu Heroi" />
      </ContentSearchBar>
    </Container>
  );
};

export default Bar;
