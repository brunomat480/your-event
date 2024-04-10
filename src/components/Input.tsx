// import { ComponentProps } from 'react';

import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

// interface InputProps extends ComponentProps<'input'> { }

interface InputProps {
  inputName: string;
}

export function Input({ inputName }: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name: inputName });

  return (
    <>
      <input
        data-no-valid={error?.message}
        className={twMerge(
          'h-8 w-full rounded-md border-[2px]  p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium',
          error?.message
            ? 'border-rose-500 '
            : 'border-white focus:border-indigo-900',
        )}
        id={inputName}
        type={inputName}
        {...field}
      />
      {error?.message && (
        <span className="text-sm font-medium text-rose-500">
          {error.message}
        </span>
      )}
    </>
  );
}
