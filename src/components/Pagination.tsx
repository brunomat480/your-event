import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';

export function Pagination() {
  return (
    <div>
      <div className="flex items-center justify-center gap-1">
        <button
          className="rounded-md p-1 hover:bg-white hover:bg-opacity-25"
          type="button"
        >
          <CaretDoubleLeft className="h-8 w-8" />
        </button>
        <button
          className="rounded-md p-1 hover:bg-white hover:bg-opacity-25"
          type="button"
        >
          <CaretLeft className="h-8 w-8" />
        </button>
        <span className="mx-2 font-semibold text-white">Página 1 de 10</span>
        <button
          className="rounded-md p-1 hover:bg-white hover:bg-opacity-25"
          type="button"
        >
          <CaretRight className="h-8 w-8" />
        </button>
        <button
          className="rounded-md p-1 hover:bg-white hover:bg-opacity-25"
          type="button"
        >
          <CaretDoubleRight className="h-8 w-8" />
        </button>
      </div>
      <span className="mt-4 select-none text-sm font-medium text-white text-opacity-50">
        Total de 20 evento(s)
      </span>
    </div>
  );
}
