import { createBrowserRouter } from 'react-router-dom';
import { Band, Home } from './pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Band />,
  },
]);

export default routes;
