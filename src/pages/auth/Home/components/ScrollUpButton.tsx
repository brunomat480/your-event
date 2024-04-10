import { ArrowUp } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

export function ScrollUpButton() {
  const buttonBackToTop = useRef<HTMLAnchorElement>(null);

  function handleScrollAlterColorNavbar() {
    if (scrollY >= 500) {
      buttonBackToTop.current?.classList.remove('opacity-0', 'scale-0');
      buttonBackToTop.current?.classList.add('opacity-1', 'scale-100');
    } else {
      buttonBackToTop.current?.classList.remove('opacity-1', 'scale-100');
      buttonBackToTop.current?.classList.add('opacity-0', 'scale-0');
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
      ref={buttonBackToTop}
      className="fixed bottom-20 right-4 rounded-full bg-indigo-900 p-3 leading-none transition-all duration-300 "
      href="#start"
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </a>
  );
}
