import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

const Header = props => {
  return (
    <StyledHeader>
      <div className='header-content'>
        <StyledRMDBLogo src={RMDBLogo} alt='rmdb-logo' />
        <StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
