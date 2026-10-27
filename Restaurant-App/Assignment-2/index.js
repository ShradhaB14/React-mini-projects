import React from 'react'
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router";
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
import { Body } from './Components/Body';
import  ContactUs  from './Components/ContactUs';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element: <Body/>
      },
  {
    path: '/about',
    element: <AboutUs/>
  },
  {
    path: '/contact',
    element: <ContactUs/>
  }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)