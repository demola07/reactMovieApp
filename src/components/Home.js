import React, { useState, useEffect } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../config';
import PropTypes from 'prop-types';

import { useHomeFetch } from './hooks/useHomeFetch';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  return (
    <>
      <HeroImage></HeroImage>
      <SearchBar></SearchBar>
      <Grid></Grid>
      <MovieThumb></MovieThumb>
      <Spinner></Spinner>
      <LoadMoreButton></LoadMoreButton>
    </>
  );
};

Home.propTypes = {};

export default Home;
