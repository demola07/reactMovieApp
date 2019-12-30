import React from 'react';

import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import MovieThumb from './MovieThumb';

import { StyledMovieInfo } from '../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className='movieinfo-content'>
        <div className='movieinfo-thumb'>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          ></MovieThumb>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

export default MovieInfo;
