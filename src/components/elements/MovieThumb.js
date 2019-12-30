import React from 'react';
import PropTypes from 'prop-types';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img className='clickable' src={image} alt='Movie Thumb'></img>
      ) : (
        <img src={image} alt='moviethumb'></img>
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {};

export default MovieThumb;
