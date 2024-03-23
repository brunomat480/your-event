import eventImage from '@assets/slide-1.png';

export function EventCard() {
  return (
    <div className="group relative mx-auto mt-8 h-80 w-60 overflow-y-hidden rounded-tl-[40px] bg-indigo-600 shadow-xl">
      <div className="absolute top-11 h-full w-full transition-colors group-hover:bg-black group-hover:bg-opacity-60"></div>

      <h2 className="select-none py-2 text-lg font-medium text-white">
        Nome do Evento
      </h2>

      <img src={eventImage} alt="" className="h-full object-cover" />

      <div className="absolute bottom-0 left-0 translate-y-52 bg-white px-2 py-3 shadow-md transition-transform duration-500 ease-out group-hover:translate-y-0">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-600">
            {/* <img src={person} alt="" className="rounded-full" /> */}
          </div>
          <span className="select-none text-xs font-medium">
            Nome do responsável
          </span>
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
