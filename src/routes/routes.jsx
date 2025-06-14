import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Header from '../components/Header'
import MovieDetails from '../components/MovieDetails'
import Terms from '../pages/Terms'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movie/:id',
        element: <MovieDetails />
      },
      {
        path: '/terms',
        element: <Terms />
      }
    ]
  }
])

export default routes