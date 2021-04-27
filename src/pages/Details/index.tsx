import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Bar from '../../components/Bar';
import SpiderMan from '../../assets/images/spider-man.png';

import {
  Container,
  ContainerHero,
  HeroImageBox,
  HeroDetailBox,
} from './styles';

const Details: React.FC = () => {
  return (
    <>
      <Header />
      <Bar />
      <Container>
        <ContainerHero>
          <HeroImageBox>
            <img src={SpiderMan} alt="Spider Man" />
          </HeroImageBox>
          <HeroDetailBox>
            <h1>Spider Man</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis reiciendis culpa ad soluta et ducimus rem velit illo
              quaerat dolorum? Corporis, atque doloremque distinctio accusantium
              quae temporibus consectetur omnis aliquid?
            </p>
          </HeroDetailBox>
        </ContainerHero>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
