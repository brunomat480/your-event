import eventImageDesktop from '@assets/pessoa-segurando-uma-guitarra-em-cima-do-palco-desktop.png';
import { Navbar } from '@components/Navbar';
import { Pagination } from '@components/Pagination';
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
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

      <section id="start" className="pt-24">
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

      <section id="contacts" className="px-10 lg:px-0">
        <div className="container mx-auto pb-16 pt-28">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-44">
            <header className="text-center lg:text-start">
              <h4 className="text-sm font-bold uppercase leading-none tracking-2 text-indigo-900 lg:text-lg">
                contatos
              </h4>
              <h2 className="text-2xl font-bold lg:text-3xl">
                Entre em contato
              </h2>

              <p className="mt-4 text-gray-500 lg:max-w-96">
                Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
                ouvir suas críticas e sugestões.
              </p>
            </header>

            <div className="gap-32 lg:flex lg:items-center">
              <div className="mt-7 space-y-5">
                <span className="flex items-center gap-3 text-base font-bold text-indigo-900">
                  <EnvelopeSimple size={32} />
                  yourevent@gmail.com
                </span>

                <span className="flex items-center gap-3 text-base font-bold text-indigo-900">
                  <WhatsappLogo size={32} />
                  (xx) x xxxx-xxxx
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 px-10 py-12 lg:px-0">
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <span className="select-none text-2xl font-bold">
              your
              <span className="text-white transition-colors duration-300">
                Event
              </span>
            </span>

            <span className="text-sm text-gray-50">
              your event &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="mr-32 mt-16 flex w-full flex-row items-center justify-center gap-2 lg:mt-0 lg:w-0 lg:justify-end ">
            <a
              href="#"
              className="rounded-full p-2 transition-transform duration-200 hover:-translate-y-1.5 hover:bg-white/25"
            >
              <InstagramLogo className="size-8 text-white" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 transition-transform duration-200 hover:-translate-y-1.5 hover:bg-white/25"
            >
              <YoutubeLogo className="size-8 text-white" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 transition-transform duration-200 hover:-translate-y-1.5 hover:bg-white/25"
            >
              <FacebookLogo className="size-8 text-white" />
            </a>

            <a
              href="#"
              className="rounded-full p-2 transition-transform duration-200 hover:-translate-y-1.5 hover:bg-white/25"
            >
              <TwitterLogo className="size-8 text-white" />
            </a>
          </div>
        </div>
      </footer>
      <ScrollUpButton />
      <SurpportChat />
    </div>
  );
}
