interface SignInProps {
  openSignUpModal: boolean;
  onOpenSigninModal: () => void;
}

export function SignIn({ onOpenSigninModal, openSignUpModal }: SignInProps) {
  return (
    <div
      className={
        !openSignUpModal
          ? 'invisible fixed inset-0 h-full w-full bg-black bg-opacity-50 opacity-0 backdrop-blur-sm transition-all duration-200 ease-in'
          : 'visible fixed inset-0 h-full w-full bg-black bg-opacity-50 opacity-100 backdrop-blur-sm transition-all duration-200 ease-out'
      }
    >
      <div
        className={
          !openSignUpModal
            ? 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-200'
            : 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all duration-200'
        }
      >
        <div className="w-80 rounded-lg bg-indigo-600 pb-3">
          <div className="py-4 text-center">
            <span className="select-none text-2xl font-bold">
              your
              <span className="text-white transition-colors duration-300">
                Event
              </span>
            </span>
          </div>

          <form className="bg-slate-100 px-6 text-sm">
            <div className="pt-10">
              <label className=" font-medium text-indigo-900" htmlFor="email">
                E-mail ou telefone
              </label>
              <input
                className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                type="email"
                id="email"
              />
            </div>

            <div className="mt-4">
              <label className="font-medium text-indigo-900" htmlFor="password">
                Senha
              </label>
              <input
                className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                type="password"
                id="password"
              />
            </div>
            <div className="mt-2 text-end font-medium">
              <button
                className="text-xs text-indigo-900 underline underline-offset-2"
                type="button"
              >
                Esqueci a senha
              </button>
            </div>

            <div className="mt-4 space-x-4 pb-2 text-end text-xs">
              <button
                className="select-none font-medium underline underline-offset-2 hover:text-red-500"
                type="button"
                onClick={onOpenSigninModal}
              >
                Cancelar
              </button>
              <button
                className="select-none rounded-md bg-indigo-900 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-indigo-800"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
