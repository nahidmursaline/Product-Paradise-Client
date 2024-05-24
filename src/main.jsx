import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'

import { router } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
    </AuthProvider>
  </div>
)
