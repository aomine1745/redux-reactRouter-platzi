import React from 'react';
import { Helmet } from 'react-helmet';

import Search from '../Layout/Search';
import Categories from '../Layout/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3001/initialState';

const Home = () => {

  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Helmet bodyAttributes={{ style: 'background-color :#834DFB' }}>
        <title>PLatzi Video | by aomine</title>
      </Helmet>

      <Search />

      {initialState.mylist.length !== 0 &&
        (
          <Categories title='Mi lista'>
            <Carousel>
              {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )}

      {initialState.trends.length !== 0 &&
        (
          <Categories title='Tendencia'>
            <Carousel>
              {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )}

      {initialState.originals.length !== 0 &&
        (
          <Categories title='Originales de PlatziVideo'>
            <Carousel>
              {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )}
    </>
  );
};

export default Home;
