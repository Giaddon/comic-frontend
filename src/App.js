import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from "./Routes";
import NavBar from './NavBar';
import GlobalStyle from "./GlobalStyle";
import Container from "./Container";
import Footer from './Footer';

export default function App() {
  return (
    <BrowserRouter>  
      <GlobalStyle />
      <NavBar />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
