import { Navbar } from '@components/Navbar';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <>
      <Helmet title="Início" />
      <Navbar />
    </>
  );
}
