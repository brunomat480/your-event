import { Profile } from '@pages/app/Profile';
import { Home } from '@pages/auth/Home';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/profile',
    element: <Profile />,
  },
]);
