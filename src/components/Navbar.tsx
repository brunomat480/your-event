import { Logo } from '@assets/Logo';
// import HamburgerMenu from 'hamburger-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleToggleMenu() {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 py-7">
      <Logo />

      {/* <HamburgerMenu toggled={isOpen} toggle={setOpen} /> */}

      <button
        className="flex  flex-col"
        type="button"
        onClick={handleToggleMenu}
      >
        <div
          className={
            isOpen
              ? 'h-[2px] w-6 translate-y-[2px] rotate-45 bg-black transition-all'
              : 'h-[2px] w-6 -translate-y-1 bg-black transition-all'
          }
        ></div>
        <div
          className={
            isOpen
              ? 'h-[2px] w-6 bg-black opacity-0 transition-all'
              : 'h-[2px] w-6 bg-black opacity-100 transition-all  '
          }
        ></div>
        <div
          className={
            isOpen
              ? ' h-[2px] w-6 -translate-y-[2px] -rotate-45 bg-black transition-all'
              : 'h-[2px] w-6 translate-y-1 bg-black transition-all'
          }
        ></div>
      </button>
    </nav>
  );
}
