import React, { useState } from 'react';
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

import Noimage from './images/no_image.jpg';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  if (error) return <div>Something went wrong .....</div>;

  if (!movies[0]) return <Spinner></Spinner>;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      ></HeroImage>
      <SearchBar></SearchBar>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : Noimage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          ></MovieThumb>
        ))}
      </Grid>
      <MovieThumb></MovieThumb>
      <Spinner></Spinner>
      <LoadMoreButton></LoadMoreButton>
    </>
  );
};

Home.propTypes = {};

export default Home;
