import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import Home from '../Pages/Home';
import AboutMe from '../Pages/AboutMe';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/*',
        element: <Error />
      }
    ]
  },
]);

export default Router;
