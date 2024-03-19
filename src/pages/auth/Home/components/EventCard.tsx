import eventImage from '@assets/slide-1.png';

export function EventCard() {
  return (
    <div className="pt relative m-auto mt-8 h-80 w-60 rounded-tl-[40px] bg-indigo-600 shadow-xl">
      <h2 className="py-2 text-lg font-medium text-white">Nome do Evento</h2>

      <img src={eventImage} alt="" className="object-cover" />

      <div className="absolute bottom-0 left-0 bg-white px-2 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-600">
            {/* <img src={person} alt="" className="rounded-full" /> */}
          </div>
          <span className="text-xs font-medium">Nome do responsável</span>
        </div>

        <div className="mt-2 flex flex-col gap-1 text-left text-xs">
          <span>
            <span className="font-medium">Local:</span> local do evento
          </span>
          <span>
            <span className="font-medium">Data:</span> 00/00/0000
          </span>
          <span>
            <span className="font-medium">Contato:</span> (xx) x xxxx-xxxx
          </span>
          <span className="flex flex-col">
            <span className="font-medium">Descrição:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt natus voluptas beatae magni, molestias modi.
          </span>
        </div>
      </div>
    </div>
  );
}
