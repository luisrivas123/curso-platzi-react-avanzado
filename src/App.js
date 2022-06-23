import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <BrowserRouter>
      <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          // ? <h1>Detail ID</h1>
          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:categoryId' element={<Home />} />
          </Routes>
      }
    </div>
    </BrowserRouter>
  )
}
