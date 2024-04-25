import { Input } from '@components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

interface SignInProps {
  openSignUpModal: boolean;
  onOpenSigninModal: () => void;
}

const signInFormSchema = z.object({
  email: z.string().min(1, 'Informe o e-mail').email('E-mail inválido'),
  password: z.string().min(1, 'Infome a senha'),
});

type SignInFormType = z.infer<typeof signInFormSchema>;

export function SignIn({ onOpenSigninModal, openSignUpModal }: SignInProps) {
  const methods = useForm<SignInFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInFormSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  async function signIn({ email, password }: SignInFormType) {
    await new Promise((resolver) => setTimeout(resolver, 2000));

    console.log({ email, password });
  }

  function handleCloseFormSignIn() {
    onOpenSigninModal();
    reset();
  }

  return (
    <div
      className={
        !openSignUpModal
          ? 'invisible fixed inset-0 h-screen w-screen bg-black/20 opacity-0 backdrop-blur-sm transition-all duration-200 ease-in'
          : 'visible fixed inset-0 h-screen w-screen bg-black/20 opacity-100 backdrop-blur-sm transition-all duration-200 ease-out'
      }
    >
      <div
        className={
          !openSignUpModal
            ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-200'
            : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all duration-200'
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

          <FormProvider {...methods}>
            <form
              className="bg-slate-100 px-6 text-sm"
              noValidate
              onSubmit={handleSubmit(signIn)}
            >
              <div className="pt-10">
                <label className="font-medium text-indigo-900" htmlFor="email">
                  E-mail ou telefone
                </label>
                <Input nameField="email" type="email" id="email" />
              </div>

              <div className="mt-4">
                <label
                  className="font-medium text-indigo-900"
                  htmlFor="password"
                >
                  Senha
                </label>
                <Input nameField="password" type="password" id="password" />
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
                  onClick={handleCloseFormSignIn}
                >
                  Cancelar
                </button>
                <button
                  className="select-none rounded-md bg-indigo-900 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Entrar
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
