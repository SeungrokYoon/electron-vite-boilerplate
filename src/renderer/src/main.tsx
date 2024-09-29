import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const router = createMemoryRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <LoginPage /> }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
