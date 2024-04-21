import { ComponentProps } from 'react';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  nameField: string;
}

export function Input({ nameField, ...rest }: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name: nameField });

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
        {...field}
        {...rest}
      />
      {error?.message && (
        <span className="text-xs font-medium text-rose-500">
          {error.message}
        </span>
      )}
    </>
  );
}
