import { ArrowUp } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function ScrollUpButton() {
  const [scroll, setScroll] = useState(false);

  function handleScrollAlterColorNavbar() {
    if (scrollY > 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    handleScrollAlterColorNavbar();

    return () => {
      window.addEventListener('scroll', handleScrollAlterColorNavbar);
    };
  }, []);

  return (
    <a
      className={
        scroll
          ? 'opacity-1 visible fixed bottom-32 right-4 translate-y-full rounded-full bg-indigo-900 p-3 leading-none transition-all duration-300 '
          : 'bg-orange invisible fixed bottom-32 right-4 translate-y-0 rounded-full p-3 leading-none opacity-0 transition-all duration-300 '
      }
      href="#start"
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </a>
  );
}
