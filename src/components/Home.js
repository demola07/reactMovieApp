import React from 'react';
import PropTypes from 'prop-types';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

const Home = props => {
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
