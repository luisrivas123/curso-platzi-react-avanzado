import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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

        <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Routes>
                <Route path='/user' element={<User />} />
                <Route path='/favs' element={<Favs />} />
              </Routes>
              : <Routes>
                <Route path='/user' element={<NotRegisteredUser />} />
                <Route path='/favs' element={<NotRegisteredUser />} />
              </Routes>
        }
        </UserLogged>

        <NavBar />
      </div>
    </BrowserRouter>
  )
}
