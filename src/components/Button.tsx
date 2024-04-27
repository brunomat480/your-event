import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-type={variant}
      className="w-full rounded-lg border-[1px] border-indigo-900 bg-indigo-900 p-2 text-sm font-medium text-white transition-colors duration-200 ease-out hover:border-indigo-800 hover:bg-indigo-800 data-[type=secondary]:bg-transparent data-[type=secondary]:text-black data-[type=secondary]:hover:bg-indigo-900 data-[type=secondary]:hover:text-white lg:bg-transparent lg:text-black lg:hover:bg-indigo-900 lg:hover:text-white"
      {...rest}
    >
      {children}
    </button>
  );
}
