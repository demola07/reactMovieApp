import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './elements/Header';
import Home from './Home';

const App = () => (
  <>
    <Header></Header>
    <Home></Home>
    <GlobalStyle></GlobalStyle>
  </>
);

export default App;
