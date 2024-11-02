import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
