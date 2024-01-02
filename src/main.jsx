import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './Component/Navber/Navber.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navber />,

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
