import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import Error from './pages/Error';
// import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: 'Projects',
                element: <Projects />,
            },
            {
                path: 'Contact',
                element: <Contact />,
            },
            {
                path: 'Resume', 
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );