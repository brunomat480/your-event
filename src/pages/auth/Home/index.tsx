import eventImage from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco.png';
import { Navbar } from '@components/Navbar';
import { Helmet } from 'react-helmet-async';

import { Carousel } from './components/Carousel';

export function Home() {
  return (
    <>
      <Helmet title="Eventos" />
      <Navbar />
      <header className="mt-20 overflow-hidden">
        <Carousel />
      </header>

      <section className="bg-slate-100 px-10 pt-20 text-center">
        <header>
          <h4 className="tracking-2 text-base font-bold leading-none text-indigo-900">
            sobre
          </h4>
          <h2 className="text-2xl font-bold">Divulgue seu evento </h2>
        </header>

        <p className="mt-5 text-base font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt
          natus voluptas beatae magni, molestias modi vel corrupti, debitis
          inventore sit nobis porro aspernatur fuga placeat cum mollitia maiores
          ipsam
        </p>

        <img
          className="mx-auto mt-7"
          src={eventImage}
          alt="Pessoa segurando uma guitarra em cima do palco"
        />
      </section>
    </>
  );
}
