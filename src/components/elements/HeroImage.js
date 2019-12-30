import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeroImage } from '../styles/StyledHeroImage';
import Spinner from './Spinner';

const HeroImage = ({ image, title, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div className='heroimage-content'>
        <div className='heroimage-text'>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = {};

export default HeroImage;
