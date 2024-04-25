import { SignIn } from '@pages/auth/Home/components/SignIn';
import { SignUp } from '@pages/auth/Home/components/SignUp';
import { EnvelopeSimple, User, WhatsappLogo } from '@phosphor-icons/react';
import { RefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from './Button';

interface NavbarProps {
  sections?: RefObject<HTMLElement[]> | undefined;
}

export function Navbar({ sections }: NavbarProps) {
  const [toggle, setToggle] = useState(false);

  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  function handleToggleMenu() {
    setToggle((state) => !state);
  }

  function handleOpenSigninModal() {
    setOpenSignInModal((state) => !state);
    setToggle(false);
  }

  function handleOpenSignUpModal() {
    setOpenSignUpModal((state) => !state);
    setToggle(false);
  }

  function handleActivateMenuAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;

    if (sections && sections.current) {
      for (const section of sections.current) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.remove('after:scale-0', 'text-black');
            });

          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.add('after:scale-100', 'lg:text-indigo-900');
            });
        } else {
          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.remove('after:scale-100', 'lg:text-indigo-900');
            });

          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.add('after:scale-0', 'text-black');
            });
        }
      }
    }
  }

  useEffect(() => {
    handleActivateMenuAtCurrentSection();

    return () => {
      window.addEventListener('scroll', handleActivateMenuAtCurrentSection);
    };
  }, []);

  return (
    <nav
      data-toggle={toggle}
      data-sign-in-form={openSignInModal}
      className="fixed right-0 z-30 h-24 w-full overflow-hidden bg-slate-100/40 px-6 shadow-lg backdrop-blur-md transition-all duration-200 data-[toggle=true]:h-screen data-[sign-in-form=true]:overflow-visible data-[toggle=true]:bg-indigo-600 data-[toggle=true]:lg:h-24 data-[toggle=true]:lg:bg-slate-100/40"
    >
      <div className="container mx-auto items-center lg:flex lg:justify-between">
        <div className="my-7 flex items-center justify-between">
          <button type="button" onClick={() => setToggle(false)}>
            <a className="text-2xl font-bold" href="#start">
              your
              <span
                className={
                  toggle
                    ? 'text-white transition-colors duration-300 lg:text-indigo-600'
                    : 'text-indigo-600 transition-colors duration-300'
                }
              >
                Event
              </span>
            </a>
          </button>

          <button
            className="flex flex-col py-2 lg:hidden"
            type="button"
            onClick={handleToggleMenu}
          >
            <div
              className={
                toggle
                  ? 'h-[2px] w-6 translate-y-[2px] rotate-45 bg-white transition-transform'
                  : 'h-[2px] w-6 -translate-y-1  bg-black transition-transform'
              }
            ></div>
            <div
              className={
                toggle
                  ? 'h-[2px] w-6 bg-white opacity-0 transition-transform'
                  : 'h-[2px] w-6 bg-black opacity-100 transition-transform'
              }
            ></div>
            <div
              className={
                toggle
                  ? 'h-[2px] w-6 -translate-y-[2px] -rotate-45 bg-white transition-transform'
                  : 'h-[2px] w-6 translate-y-1 bg-black transition-transform'
              }
            ></div>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 text-black sm:gap-8 lg:flex lg:flex-row lg:items-center xl:gap-48">
          <ul className="mt-20 flex flex-col items-center gap-7 font-semibold text-white sm:mt-0 sm:gap-3 sm:text-xl lg:mr-10 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-14 lg:text-base lg:text-black">
            <li>
              <button type="button" onClick={handleToggleMenu}>
                <a
                  className="text-2xl text-white after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-100 sm:text-base lg:text-black"
                  href="#start"
                >
                  Início
                </a>
              </button>
            </li>
            <li>
              <button type="button" onClick={handleToggleMenu}>
                <a
                  className="text-2xl text-white after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-100 sm:text-base lg:text-black"
                  href="#about"
                >
                  Sobre
                </a>
              </button>
            </li>
            <li>
              <button type="button" onClick={handleToggleMenu}>
                <a
                  className="text-2xl text-white after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-100 sm:text-base lg:text-black"
                  href="#events"
                >
                  Eventos
                </a>
              </button>
            </li>

            <li>
              <button type="button" onClick={handleToggleMenu}>
                <a
                  className="text-2xl text-white after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-100 sm:text-base lg:text-black"
                  href="#contacts"
                >
                  Contatos
                </a>
              </button>
            </li>
          </ul>

          <div className="flex h-0 items-center gap-11 lg:gap-3">
            <Button
              variant={toggle ? 'primary' : 'secondary'}
              onClick={handleOpenSignUpModal}
            >
              Cadastre-se
            </Button>

            <button
              className="flex items-center gap-2 rounded-lg p-3 text-sm font-medium text-white hover:bg-gray-200 hover:bg-opacity-30 lg:text-black lg:hover:bg-opacity-95"
              type="button"
              onClick={handleOpenSigninModal}
            >
              Login
              <User size={20} />
            </button>
          </div>

          <div className="mt-10 block space-y-5 sm:mt-0 sm:space-y-1 sm:text-xs lg:mt-0 lg:hidden">
            <span className="flex items-center gap-3 font-bold text-white">
              <EnvelopeSimple size={32} className="h-8 w-8 sm:h-5 sm:w-5" />
              yourevent@gmail.com
            </span>

            <span className="flex items-center gap-3 font-bold text-white">
              <WhatsappLogo size={32} className="h-8 w-8 sm:h-5 sm:w-5" />
              (xx) x xxxx-xxxx
            </span>
          </div>
        </div>
      </div>

      {createPortal(
        <SignIn
          onOpenSigninModal={handleOpenSigninModal}
          openSignUpModal={openSignInModal}
        />,
        document.getElementById('portal')!,
      )}

      {createPortal(
        <SignUp
          onOpenSignUpModal={handleOpenSignUpModal}
          openSignUpModal={openSignUpModal}
        />,
        document.getElementById('portal')!,
      )}
    </nav>
  );
}
