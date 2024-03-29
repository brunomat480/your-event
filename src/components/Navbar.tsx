import { SignIn } from '@pages/auth/Home/components/SignIn';
import { SignUp } from '@pages/auth/Home/components/SignUp';
import { EnvelopeSimple, User, WhatsappLogo } from '@phosphor-icons/react';
import { RefObject, useEffect, useState } from 'react';

interface NavbarProps {
  sections?: RefObject<HTMLElement[]> | undefined;
}

export function Navbar({ sections }: NavbarProps) {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  function handleToggleMenu() {
    setToggle((state) => !state);
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
              element.classList.remove('after:scale-0');
            });

          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.add('after:scale-100');
            });
        } else {
          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.remove('after:scale-100');
            });

          document
            .querySelectorAll('nav ul li a[href*=' + sectionId + ']')
            .forEach((element) => {
              element.classList.add('after:scale-0');
            });
        }
      }
    }
  }

  function handleOpenSigninModal() {
    setOpenSignInModal((state) => !state);
    setToggle(false);
  }

  function handleOpenSignUpModal() {
    setOpenSignUpModal((state) => !state);
    setToggle(false);
  }

  function handleScrollAlterColorNavbar() {
    if (scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    handleScrollAlterColorNavbar();
    handleActivateMenuAtCurrentSection();

    return () => {
      window.addEventListener('scroll', handleScrollAlterColorNavbar);
      window.addEventListener('scroll', handleActivateMenuAtCurrentSection);
    };
  }, []);

  return (
    <nav
      className={
        toggle || scroll
          ? 'fixed right-0 z-30 w-full bg-indigo-600 px-6 py-7 shadow-lg transition-colors duration-100'
          : 'fixed right-0 z-30 w-full bg-slate-100 px-6 py-7 transition-colors duration-500'
      }
    >
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-2xl font-bold" href="#start">
          your
          <span
            className={
              toggle || scroll
                ? 'text-white transition-colors duration-300'
                : 'text-indigo-600 transition-colors duration-300'
            }
          >
            Event
          </span>
        </a>

        <button
          className="flex flex-col py-2 lg:hidden"
          type="button"
          onClick={handleToggleMenu}
        >
          <div
            className={
              toggle
                ? 'h-[2px] w-6 translate-y-[2px] rotate-45 bg-white transition-transform'
                : `h-[2px] w-6 -translate-y-1 ${scroll ? 'bg-white' : 'bg-black'} transition-transform`
            }
          ></div>
          <div
            className={
              toggle
                ? 'h-[2px] w-6 bg-white opacity-0 transition-transform'
                : `h-[2px] w-6 ${scroll ? 'bg-white' : 'bg-black'} opacity-100 transition-transform`
            }
          ></div>
          <div
            className={
              toggle
                ? 'h-[2px] w-6 -translate-y-[2px] -rotate-45 bg-white transition-transform'
                : `h-[2px] w-6 translate-y-1 ${scroll ? 'bg-white' : 'bg-black'} transition-transform`
            }
          ></div>
        </button>

        <div
          className={`hidden lg:flex lg:items-center lg:gap-52 ${scroll ? 'text-white' : 'text-black'}`}
        >
          <ul className="flex items-center gap-28 text-base font-semibold">
            <li>
              <a
                className="after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
                href="#start"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="after:block after:h-[3px] after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
                href="#events"
              >
                Eventos
              </a>
            </li>
          </ul>

          <div className="flex h-0 items-center gap-11">
            <button
              className={`rounded-lg border-[1px] border-indigo-900 p-2 text-sm font-medium transition-colors duration-200 ease-out  hover:text-white ${scroll ? 'bg-indigo-900 hover:border-indigo-800 hover:bg-indigo-800' : 'hover:bg-indigo-900'}`}
              type="button"
              onClick={handleOpenSignUpModal}
            >
              Cadastre-se
            </button>

            <button
              className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${scroll ? 'hover:bg-opacity-30' : 'hover:bg-opacity-95'} hover:bg-gray-200`}
              type="button"
              onClick={handleOpenSigninModal}
            >
              Login
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* <-------- MOBILE --------> */}

      <div
        className={
          toggle
            ? 'absolute left-0 right-0 top-[88px] flex h-screen w-screen flex-col items-center overflow-y-hidden bg-indigo-600 transition-all duration-300 ease-in-out lg:hidden'
            : 'absolute left-0 right-0 top-[88px] flex h-0 w-screen flex-col items-center overflow-y-hidden bg-indigo-600 transition-all duration-300 ease-in-out lg:hidden'
        }
      >
        <ul className="mt-16 flex flex-col items-center gap-7 text-3xl font-bold text-white ">
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
                href="#start"
              >
                Início
              </a>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
                href="#about"
              >
                Sobre
              </a>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleToggleMenu}>
              <a
                className="after:block after:h-1 after:scale-0 after:bg-indigo-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-100"
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
            onClick={handleOpenSignUpModal}
          >
            Cadastre-se
          </button>

          <button
            className="flex items-center gap-2 rounded-lg p-3 text-base font-medium text-white hover:bg-gray-200 hover:bg-opacity-30"
            type="button"
            onClick={handleOpenSigninModal}
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

      <SignIn
        onOpenSigninModal={handleOpenSigninModal}
        openSignUpModal={openSignInModal}
      />

      <SignUp
        onOpenSignUpModal={handleOpenSignUpModal}
        openSignUpModal={openSignUpModal}
      />
    </nav>
  );
}
