import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';

export const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  )
}
