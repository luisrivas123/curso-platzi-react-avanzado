import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
// import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
import { User } from './pages/User'
// import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound';

import {Context} from './Context';

const Favs = React.lazy(() => import ('./pages/Favs'))
const Home = React.lazy(() => import ('./pages/Home'))
const Detail = React.lazy(() => import ('./pages/Detail'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route exact path='/favs' 
            element={isAuth 
              ? <Favs /> 
              : <Navigate replace to='/login' />
            } 
          />
          <Route exact path='/user' 
            element={isAuth 
              ? <User /> 
              : <Navigate replace to='/login' />
            } 
          />
          <Route exact path='/login' 
            element={!isAuth 
            ? <NotRegisteredUser /> 
            : <Navigate replace to='/' />
            } 
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
    
  )
}



// return (
//   <BrowserRouter>
//     <GlobalStyle />
//     <Logo />
//     <Routes>
//       <Route exact path='/' element={<Home />} />
//       <Route exact path='/pet/:id' element={<Home />} />
//       <Route exact path='/detail/:id' element={<Detail />} />
//       <Route exact path='/favs' element={isAuth ? <Favorites /> : <Navigate replace to='/login' />} />
//       <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
//       <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
//       <Route path='*' element={<NotFound />} />
//     </Routes>
//     <NavBar />
//   </BrowserRouter>
// )
// }
