import { EnvelopeSimple, User, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(0);

  function handleToggleMenu() {
    setToggle((state) => !state);
  }

  useEffect(() => {
    function handleScrollAlterColorNavbar() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScrollAlterColorNavbar);
  }, [scroll]);

  return (
    <nav
      className={
        toggle || scroll > 0
          ? 'fixed left-0 top-0 z-30 flex w-full items-center justify-between bg-indigo-600 px-6 py-7 shadow-lg transition-colors duration-100'
          : 'fixed left-0 top-0 z-30 flex w-full items-center justify-between bg-slate-100 px-6 py-7 transition-colors duration-500'
      }
    >
      <a className="text-2xl font-bold" href="#start">
        your
        <span
          className={
            toggle || scroll > 0
              ? 'text-white transition-colors duration-300'
              : 'text-indigo-600 transition-colors duration-300'
          }
        >
          Event
        </span>
      </a>

      <button
        className="flex flex-col py-2"
        type="button"
        onClick={handleToggleMenu}
      >
        <div
          className={
            toggle
              ? 'h-[2px] w-6 translate-y-[2px] rotate-45 bg-white transition-transform'
              : `h-[2px] w-6 -translate-y-1 ${scroll > 0 ? 'bg-white' : 'bg-black'} transition-transform`
          }
        ></div>
        <div
          className={
            toggle
              ? 'h-[2px] w-6 bg-white opacity-0 transition-transform'
              : `h-[2px] w-6 ${scroll > 0 ? 'bg-white' : 'bg-black'} opacity-100 transition-transform`
          }
        ></div>
        <div
          className={
            toggle
              ? 'h-[2px] w-6 -translate-y-[2px] -rotate-45 bg-white transition-transform'
              : `h-[2px] w-6 translate-y-1 ${scroll > 0 ? 'bg-white' : 'bg-black'} transition-transform`
          }
        ></div>
      </button>

      <div
        className={
          toggle
            ? 'container absolute left-0 right-0 top-[88px] m-auto flex h-screen w-screen flex-col items-center overflow-y-hidden bg-indigo-600 transition-all duration-300 ease-in-out'
            : 'container absolute left-0 right-0 top-[88px] m-auto flex h-0 w-screen flex-col items-center overflow-y-hidden bg-indigo-600 transition-all duration-300 ease-in-out'
        }
      >
        <ul className="mt-16 flex flex-col items-center gap-7 text-3xl font-bold text-white ">
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-150 after:content-[''] hover:after:scale-100"
                href="#start"
              >
                Início
              </a>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-150 after:content-[''] hover:after:scale-100"
                href="#about"
              >
                Sobre
              </a>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-150 after:content-[''] hover:after:scale-100"
                href="#events"
              >
                Eventos
              </a>
            </button>
          </li>
        </ul>

        <div className="mt-12 flex items-center space-x-12">
          <button
            className="rounded-lg bg-indigo-900 p-3 text-base font-medium text-white transition-colors duration-300 hover:bg-indigo-800"
            type="button"
          >
            Cadastre-se
          </button>

          <button
            className="flex items-center gap-2 rounded-lg p-3 text-base font-medium text-white hover:bg-gray-200 hover:bg-opacity-30"
            type="button"
          >
            Login <User size={20} />
          </button>
        </div>

        <div className="mt-20 space-y-5">
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
    </nav>
  );
}
