import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { Router } from './Router';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | your event" />
      <RouterProvider router={Router} />
    </HelmetProvider>
  );
}
