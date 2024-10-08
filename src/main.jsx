import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Facilities from './pages/Facilities.jsx';
import Timing from './pages/Timing.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Blog from './pages/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/facilities",
        element: <Facilities />
      },
      {
        path: "/timing",
        element: <Timing />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
