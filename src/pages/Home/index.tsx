import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import api from '../../services/api';
import { ContainerMain, RowCard, Paginator } from './styles';
import CardItem from '../../components/Card';
import Bar from '../../components/Bar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

interface HeroesMarvelInterface {
  id: string;
  name: string;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
interface Paginator {
  offset: number;
  limit: number;
  currentPageHeroe: number;
}

const Home: React.FC = () => {
  const [heroMarvel, setHeroMarvel] = useState<HeroesMarvelInterface[]>([]);
  const [totalHero, setTotalHero] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [offset, setOffiset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [showCurrentPage, setShowCurrentPage] = useState(1);

  useEffect(() => {
    const off = offset;
    const limiter = limit;

    async function loadHeroes() {
      const response = await api.get('/characters', {
        params: {
          ts: 1,
          apikey: process.env.REACT_APP_API_KEY_MARVEL,
          hash: process.env.REACT_APP_HASH_MARVEL,
          offset: off,
          limit: limiter,
        },
      });
      const { results, total } = response.data.data;
      // const current = Math.ceil(offset / limit);
      const totalPages = Math.ceil(total / limit);
      // console.log(totalPages);
      // console.log(response.data.data);
      setTotalPages(totalPages);
      setHeroMarvel(results);
      setTotalHero(total);
      setOffiset(off);
      setLimit(limiter);

      setTotalPages(totalPages);
      // console.log(response.data.data);
      // setCurrentPage(current);
    }
    loadHeroes();
  }, [limit, offset]);

  function setOffsetHeroe() {
    setCurrentPage(currentPage + 1);
    const nextPage = currentPage * limit;
    console.log(nextPage);
    setOffiset(nextPage);
  }

  function lastPageIndex() {
    const curLast = (totalPages - 1) * limit;
    setCurrentPage(totalPages - 1);
    setShowCurrentPage(totalPages);
    setOffiset(curLast);
  }

  function beginPageIndex() {
    setShowCurrentPage(1);
    setOffiset(0);
  }

  function previousPageHero() {
    const show = showCurrentPage - 1;
    const newOffiset = offset - limit;
    setShowCurrentPage(show);
    setCurrentPage(show);
    setOffiset(newOffiset);
  }

  function nextPageHero() {
    const nextPage = (currentPage + 1) * limit;
    setCurrentPage(currentPage + 1);
    setShowCurrentPage(currentPage + 1);
    setOffiset(nextPage);
  }

  return (
    <>
      <Header />
      <Bar />
      <main>
        <ContainerMain>
          <Paginator>
            <ul>
              <li>
                <button type="button" onClick={beginPageIndex}>
                  Begin Page
                </button>
              </li>
              <li>
                <button type="button" onClick={previousPageHero}>
                  Prev
                </button>
              </li>

              <li>
                <button type="button" className="activePage">
                  {showCurrentPage}
                </button>
              </li>

              <li>
                <button type="button" onClick={nextPageHero}>
                  Next
                </button>
              </li>
              <li>
                <button type="button" onClick={lastPageIndex}>
                  Last Page
                </button>
              </li>
            </ul>
          </Paginator>
          <RowCard>
            {heroMarvel.map(marvel => (
              <CardItem
                key={marvel.id}
                hero={marvel.name}
                urlCharacter={marvel.resourceURI}
                source={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
              />
            ))}
          </RowCard>
        </ContainerMain>
      </main>

      <Footer />
    </>
  );
};

export default Home;
