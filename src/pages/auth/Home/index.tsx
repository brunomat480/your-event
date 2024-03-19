import eventImage from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco.png';
import { Navbar } from '@components/Navbar';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Carousel } from './components/Carousel';
import { EventCard } from './components/EventCard';

export function Home() {
  const [openInput, setOpenInput] = useState(false);

  function handleOpenSearchInput() {
    setOpenInput((state) => !state);
  }

  return (
    <>
      <Helmet title="Eventos" />
      <Navbar />
      <header className="mt-20 overflow-hidden">
        <Carousel />
      </header>

      <section className="bg-slate-100 px-10 pb-11 pt-20 text-center">
        <header>
          <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900">
            sobre
          </h4>
          <h2 className="text-2xl font-bold">Divulgue seu evento</h2>
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

      <section className="bg-indigo-400 px-10 pb-9 pt-9 text-center">
        <header>
          <h4 className="text-xs font-bold uppercase leading-none tracking-2 text-indigo-900">
            eventos
          </h4>
          <h2 className="text-2xl font-bold">Eventos abertos</h2>
        </header>

        <div className="mt-16 flex justify-start gap-4">
          <button
            className="text-white hover:text-indigo-900"
            type="button"
            onClick={handleOpenSearchInput}
          >
            <MagnifyingGlass size={32} />
          </button>
          <div
            className={
              openInput
                ? 'w-full overflow-x-visible transition-all duration-300 ease-in-out'
                : 'w-0 overflow-x-hidden transition-all duration-300 ease-in-out'
            }
          >
            <input
              className="w-full rounded-md border-[2px] border-white p-2 text-sm outline-none transition-all duration-150 ease-in placeholder:font-medium placeholder:text-gray-500 focus:border-indigo-900"
              type="text"
              placeholder="Busque um evento"
            />
          </div>
        </div>

        {Array.from({ length: 5 }).map((_, i) => (
          <EventCard key={i} />
        ))}
      </section>
    </>
  );
}
