import { Input } from '@components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from '@phosphor-icons/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

interface SignUpProps {
  openSignUpModal: boolean;
  onOpenSignUpModal: () => void;
}

const signUpFormSchema = z
  .object({
    profilePhoto: z.string().nullable(),
    firstName: z.string().min(1, 'Nome obrigatório'),
    lastName: z.string().min(1, 'Sobrenome obrigatório'),
    email: z.string().min(1, 'E-mail obrigatório').email('E-mail inválido'),
    phone: z.coerce.string().min(11, 'Telefone obrigatório'),
    password: z.string().min(1, 'Senha a senha'),
    confirmPassword: z.string().min(1, 'Repita a senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senha incorreta',
    path: ['confirmPassword'],
  });

type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;

export function SignUp({ onOpenSignUpModal, openSignUpModal }: SignUpProps) {
  const methods = useForm<SignUpFormSchemaType>({
    defaultValues: {
      profilePhoto: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  async function signUp(data: SignUpFormSchemaType) {
    await new Promise((resolver) => setTimeout(resolver, 2000));

    console.log(data);
  }

  function handleCloseFormSignUp() {
    onOpenSignUpModal();
    reset();
  }

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
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 rounded-lg bg-indigo-600 pb-3">
            <div className="py-8 text-center">
              <span className="select-none text-2xl font-bold">
                your
                <span className="text-white transition-colors duration-300">
                  Event
                </span>
              </span>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(signUp)}
                className="bg-slate-100 px-6 text-sm"
              >
                <label className="cursor-pointer" htmlFor="image">
                  <div className="absolute top-12 flex h-24 w-24 items-center justify-center rounded-full border-2 border-indigo-600 bg-white shadow-md">
                    {/* <input id="dropzone-file" className="hidden" type="file" /> */}
                    <Input
                      nameField="profilePhoto"
                      type="file"
                      id="image"
                      className="hidden"
                    />
                    <Plus className="h-8 w-8 text-indigo-900" />
                  </div>
                </label>

                <div className="grid grid-cols-2 gap-5 pt-16">
                  <div>
                    <label
                      className="font-medium text-indigo-900"
                      htmlFor="first-name"
                    >
                      Nome
                    </label>
                    {/* <input
                      className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                      type="email"
                      id="email"
                    /> */}
                    <Input nameField="firstName" type="text" id="first-name" />
                  </div>

                  <div>
                    <label
                      className="font-medium text-indigo-900"
                      htmlFor="last-name"
                    >
                      Sobrenome
                    </label>
                    {/* <input
                      className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                      type="password"
                      id="password"
                    /> */}
                    <Input nameField="lastName" type="text" id="last-name" />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    className="font-medium text-indigo-900"
                    htmlFor="e-mail"
                  >
                    E-mail
                  </label>
                  {/* <input
                    className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                    type="password"
                    id="password"
                  /> */}
                  <Input nameField="email" type="email" id="e-mail" />
                </div>

                <div className="mt-4">
                  <label
                    className="font-medium text-indigo-900"
                    htmlFor="phone"
                  >
                    Telefone
                  </label>
                  {/* <input
                    className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                    type="password"
                    id="password"
                  /> */}
                  <Input nameField="phone" type="tel" id="phone" />
                </div>

                <div className="mt-4">
                  <label
                    className="font-medium text-indigo-900"
                    htmlFor="security"
                  >
                    Senha
                  </label>
                  {/* <input
                    className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                    type="password"
                    id="password"
                  /> */}
                  <Input nameField="password" type="password" id="security" />
                </div>

                <div className="mt-4">
                  <label
                    className="font-medium text-indigo-900"
                    htmlFor="confirm-password"
                  >
                    Repita a senha
                  </label>
                  {/* <input
                    className="h-8 w-full rounded-md border-[2px] border-white p-2 text-sm shadow-md outline-none transition-all duration-150 ease-in placeholder:font-medium focus:border-indigo-900"
                    type="password"
                    id="password"
                  /> */}
                  <Input
                    nameField="confirmPassword"
                    type="password"
                    id="confirm-password"
                  />
                </div>

                <div className="mt-4 space-x-4 pb-2 text-end text-xs">
                  <button
                    className="select-none font-medium underline underline-offset-2 hover:text-red-500"
                    type="button"
                    onClick={handleCloseFormSignUp}
                  >
                    Cancelar
                  </button>
                  <button
                    className="select-none rounded-md bg-indigo-900 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-indigo-800 disabled:bg-gray-400"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
