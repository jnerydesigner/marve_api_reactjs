import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
// import Details from '../../pages/Details';

interface CardDetails {
  hero: string;
  source: string;
  urlCharacter: string;
}

const Card: React.FC<CardDetails> = ({
  hero,
  source,
  urlCharacter,
}: CardDetails) => {
  return (
    <Container>
      <div className="box-img">
        <img src={source} alt={hero} />
      </div>
      <div className="description">
        <h3>{hero}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          debitis quaerat deserunt possimus sint fuga beatae dolore autem quos
          odit consequuntur in consequatur pariatur mollitia sapiente reiciendis
          dignissimos, totam sed?
        </p>
        <Link to="/details" className="btn">
          Learn More...
        </Link>
      </div>
    </Container>
  );
};

export default Card;
