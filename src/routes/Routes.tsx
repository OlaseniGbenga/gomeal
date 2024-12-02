
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import SignedIn from '@/pages/signedIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signedIn",
    element: <SignedIn />,
  },
]);

export default router;
