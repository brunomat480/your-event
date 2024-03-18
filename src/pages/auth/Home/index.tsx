import { Navbar } from '@components/Navbar';
import { Helmet } from 'react-helmet-async';

import { Carousel } from './components/Carousel';

export function Home() {
  return (
    <>
      <Helmet title="Eventos" />

      <Navbar />

      <header className="overflow-hidden">
        <Carousel />
      </header>
    </>
  );
}
