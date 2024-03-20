import eventImage from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco.png';
import eventImageDesktop from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco-desktop.png';
import { Navbar } from '@components/Navbar';
import { Pagination } from '@components/Pagination';
import {
  ArrowUp,
  EnvelopeSimple,
  MagnifyingGlass,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { EventCard } from './components/EventCard';
import { EventsCarousel } from './components/EventsCarousel';
import { SurpportChat } from './components/SupportChat';

export function Home() {
  const [openInput, setOpenInput] = useState(false);

  function handleOpenSearchInput() {
    setOpenInput((state) => !state);
  }

  return (
    <div className="scroll-smooth">
      <Helmet title="Eventos" />
      <Navbar />
      <header id="start" className="  pt-20">
        <EventsCarousel />
      </header>

      <section
        id="about"
        className="container mx-auto px-10 pb-11 pt-28 text-center"
      >
        <header>
          <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900 lg:text-lg">
            sobre
          </h4>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Divulgue seu evento
          </h2>
        </header>

        <div className="lg:flex lg:items-center lg:space-x-16">
          <p className="mt-5 text-base font-semibold lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt natus voluptas beatae magni, molestias modi vel corrupti,
            debitis inventore sit nobis porro aspernatur fuga placeat cum
            mollitia maiores ipsam
          </p>

          <img
            className="mx-auto mt-7 lg:hidden"
            src={eventImage}
            alt="Pessoa segurando uma guitarra em cima do palco"
          />
          <img
            className=" hidden h-[581px] w-[374px] lg:flex "
            src={eventImageDesktop}
            alt=""
          />
        </div>
      </section>

      <section
        id="events"
        className="bg-indigo-400 px-10 pb-16 pt-28 text-center"
      >
        <div className="container mx-auto">
          <header>
            <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900 lg:text-lg">
              eventos
            </h4>
            <h2 className="text-2xl font-bold lg:text-3xl">Eventos abertos</h2>
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
              <label className="sr-only" htmlFor="event-name">
                Buscar evento
              </label>
              <input
                className="w-full rounded-md border-[2px] border-white p-2 text-sm outline-none transition-all duration-150 ease-in placeholder:font-medium placeholder:text-gray-500 focus:border-indigo-900"
                type="text"
                id="event-name"
                placeholder="Busque um evento"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <EventCard key={i} />
            ))}
          </div>

          <div className="mt-10">
            <Pagination />
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 px-10 py-6">
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between">
          <span className="select-none text-2xl font-bold">
            your
            <span className="text-white transition-colors duration-300">
              Event
            </span>
          </span>

          <div className="gap-32 lg:flex lg:items-center">
            <div className="mt-7 space-y-5">
              <span className="flex items-center gap-3 text-base font-bold text-white">
                <EnvelopeSimple size={32} />
                yourevent@gmail.com
              </span>

              <span className="flex items-center gap-3 text-base font-bold text-white">
                <WhatsappLogo size={32} />
                (xx) x xxxx-xxxx
              </span>
            </div>

            <div className="mt-16 text-right">
              <a type="button" href="#start" className="bg-indigo-400 p-3">
                <ArrowUp size={32} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <SurpportChat />
    </div>
  );
}
