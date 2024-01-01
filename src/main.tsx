import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/movies', element: <div>movie</div> },
      { path: 'tv-series', element: <div>Tv</div> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
