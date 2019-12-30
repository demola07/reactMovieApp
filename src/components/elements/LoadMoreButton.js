import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreButton = ({ text, callback }) => {
  return (
    <StyledLoadMoreBtn type='button' onClick={callback}>
      {text}
    </StyledLoadMoreBtn>
  );
};

LoadMoreButton.propTypes = {};

export default LoadMoreButton;
