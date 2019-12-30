import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyle';

import Movie from './Movie';
import NotFound from './NotFound';

import Header from './elements/Header';
import Home from './Home';

const App = () => (
  <>
    <Header></Header>
    <Router>
      <Home path='/'></Home>
      <Movie path='/:movieId'></Movie>
      <NotFound default></NotFound>
    </Router>
    <GlobalStyle></GlobalStyle>
  </>
);

export default App;
