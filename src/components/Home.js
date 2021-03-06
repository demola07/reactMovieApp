import React, { useState } from 'react';
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from '../config';

import { useHomeFetch } from './hooks/useHomeFetch';

import Noimage from './images/no_image.jpg';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch(searchTerm);

  const searchMovies = search => {
    const endpoint = search ? `${SEARCH_BASE_URL}${search}` : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong .....</div>;

  if (!movies[0]) return <Spinner></Spinner>;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        ></HeroImage>
      )}

      <SearchBar callback={searchMovies}></SearchBar>

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

      {loading && <Spinner />}

      {currentPage < totalPages && !loading && (
        <LoadMoreButton
          text='Load More'
          callback={loadMoreMovies}
        ></LoadMoreButton>
      )}
    </>
  );
};

export default Home;
