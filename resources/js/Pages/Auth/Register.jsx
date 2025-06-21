import InputError from '@/Components/Common/InputError';
import InputLabel from '@/Components/Common/InputLabel';
import PrimaryButton from '@/Components/Common/PrimaryButton';
import TextInput from '@/Components/Common/TextInput';
import { Head, useForm } from '@inertiajs/react';

import AuthGoogleButton from '@/Components/Partials/Auth/AuthGoogleButton';
import AuthImage from '@/Components/Partials/Auth/AuthImage';
import AuthLayout from '@/Components/Partials/Auth/AuthLayout';
import AuthLinkSwitch from '@/Components/Partials/Auth/AuthLinkSwitch';
import AuthTitle from '@/Components/Partials/Auth/AuthTitle';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Daftar" />
            <AuthLayout>
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                    <AuthTitle title="Daftar" />
                    <form onSubmit={submit}>
                        <div className="mx-auto mt-8 block w-full max-w-md font-normal">
                            <InputLabel htmlFor="name" value="Nama" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-gray-500"
                                placeholder="Masukkan nama anda"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mx-auto mt-4 block w-full max-w-md font-normal">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                placeholder="Masukkan email anda"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mx-auto mt-4 block w-full max-w-md">
                            <InputLabel htmlFor="password" value="Kata Sandi" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                placeholder="Masukkan kata sandi anda"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mx-auto mt-4 block w-full max-w-md">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Konfirmasi Kata Sandi"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                placeholder="Konfirmasi kata sandi anda"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="text-center text-sm font-medium text-gray-600">
                            <PrimaryButton
                                className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                disabled={processing}
                            >
                                Daftar
                            </PrimaryButton>
                        </div>

                        <AuthGoogleButton disabled={processing} />
                        <AuthLinkSwitch type="register" />
                    </form>
                </div>
                <AuthImage />
            </AuthLayout>
        </>
    );
}
