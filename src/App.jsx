import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'

function App() {

  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App
