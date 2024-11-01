import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import Error from './components/Error/Error.jsx';
import ProjectInfo from './components/Project-info/ProjectInfo.jsx';
import PortfolioMoreMore from './components/PortfolioMoreMore/PortfolioMoreMore.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error></Error> ,
    element: <App></App>,
    children:[
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path:'/portfolio',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Portfolio></Portfolio>
      },
      {
       path:'/portfoo/:ID',
       loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.ID}`),
       element: <PortfolioMoreMore></PortfolioMoreMore>
      },
      {
        path:'/projects',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Projects></Projects>
      },
      {
       path: '/project/:ID',
       loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.ID}`),
       element: <ProjectInfo></ProjectInfo>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
    ]
    

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
