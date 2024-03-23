import eventImageDesktop from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco-desktop.png';
import { Navbar } from '@components/Navbar';
import { Pagination } from '@components/Pagination';
import { EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import { EventCard } from './components/EventCard';
import { EventsCarousel } from './components/EventsCarousel';
import { ScrollUpButton } from './components/ScrollUpButton';
import { SurpportChat } from './components/SupportChat';

export function Home() {
  const sectionRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  return (
    <div className="scroll-smooth">
      <Helmet title="Eventos" />
      <Navbar sections={sectionRef} />

      <section id="start" className="pt-20">
        <header>
          <EventsCarousel />
        </header>
      </section>

      <section
        id="about"
        className="container mx-auto px-10 pb-20 pt-28 text-center lg:px-0 lg:pb-36"
      >
        <header className="lg:text-start">
          <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900 lg:text-lg">
            sobre
          </h4>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Divulgue seu evento
          </h2>
        </header>

        <div className="items-center lg:flex lg:space-x-16 lg:text-start">
          <div>
            <p className="mt-5 text-base font-semibold lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              incidunt natus voluptas beatae magni, molestias modi vel corrupti,
              debitis inventore sit nobis porro aspernatur fuga placeat cum
              mollitia maiores ipsam
            </p>

            <p className="mt-5 text-base font-semibold lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              incidunt natus voluptas beatae magni, molestias modi vel corrupti,
              debitis inventore sit nobis porro aspernatur fuga placeat cum
              mollitia maiores ipsam
            </p>

            <p className="mt-5 text-base font-semibold lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              incidunt natus voluptas beatae magni, molestias modi vel corrupti,
              debitis inventore sit nobis porro aspernatur fuga placeat cum
              mollitia maiores ipsam
            </p>
          </div>

          <img
            className="relative mx-auto h-[20.25rem] w-[13.5rem] after:absolute after:-ml-32 after:h-[20.25rem] after:w-[13.5rem] after:bg-indigo-400 after:content-[''] lg:h-[36.3125rem] lg:w-[23.375rem]"
            src={eventImageDesktop}
            alt=""
          />
        </div>
      </section>

      <section id="events" className="bg-indigo-400 px-10 lg:px-0">
        <div className="container mx-auto pb-16 pt-28 text-center">
          <div className="container mx-auto">
            <header className="lg:text-start">
              <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900 lg:text-lg">
                eventos
              </h4>
              <h2 className="text-2xl font-bold lg:text-3xl">
                Eventos abertos
              </h2>
            </header>

            <div className="grid grid-cols-1 gap-x-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <EventCard key={i} />
              ))}
            </div>

            <div className="mt-10">
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 px-10 py-6 lg:px-0">
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
          </div>
        </div>
      </footer>
      <ScrollUpButton />
      <SurpportChat />
    </div>
  );
}
