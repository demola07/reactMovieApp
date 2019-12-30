import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className='clickable' src={image} alt='Movie Thumb'></img>
        </Link>
      ) : (
        <img src={image} alt='moviethumb'></img>
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {};

export default MovieThumb;
