import { ChatCircle, X } from '@phosphor-icons/react';
import { useState } from 'react';

export function SurpportChat() {
  const [chatOpen, setChatOpen] = useState(false);

  function handleOpenChat() {
    setChatOpen((state) => !state);
  }

  return (
    <div className="fixed bottom-4 right-4 z-20 flex flex-col items-end md:bottom-8 md:right-8">
      <form
        className={
          chatOpen
            ? 'w-2xl absolute -top-72 right-10 flex h-64 origin-bottom-right scale-100 flex-col items-end justify-center overflow-hidden rounded-t-xl rounded-bl-xl border-4 border-indigo-600 bg-white px-4 transition-transform duration-150'
            : 'w-2xl absolute -top-72 right-10 flex h-64 origin-bottom-right scale-0 flex-col items-end justify-center overflow-hidden rounded-t-xl rounded-bl-xl border-4 border-indigo-600 bg-white px-4 transition-transform duration-150'
        }
      >
        <button
          className="absolute right-3 top-2"
          type="button"
          onClick={handleOpenChat}
        >
          <X className="h-4 w-4" />
        </button>

        <textarea
          className="h-32 min-w-80 resize-none rounded-2xl border-2 border-indigo-600 bg-transparent px-2 pt-2 text-sm outline-none"
          placeholder="Mensagem..."
        />

        <div className="mt-4 flex justify-end">
          <button
            className="rounded-lg bg-indigo-900 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-indigo-800"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

      <button
        className="group flex h-12 items-center rounded-full bg-indigo-900 px-3 text-white"
        onClick={handleOpenChat}
      >
        <ChatCircle size={24} />

        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2"></span>
          Suporte
        </span>
      </button>
    </div>
  );
}
