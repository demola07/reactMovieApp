import React, { useState, useEffect } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
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

  if (error) return <div>Something went wrong .....</div>;

  if (!state.movies[0]) return <Spinner></Spinner>;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      ></HeroImage>
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
