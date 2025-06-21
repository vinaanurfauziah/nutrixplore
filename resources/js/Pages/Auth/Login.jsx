import Checkbox from '@/Components/Common/Checkbox';
import InputError from '@/Components/Common/InputError';
import InputLabel from '@/Components/Common/InputLabel';
import PrimaryButton from '@/Components/Common/PrimaryButton';
import TextInput from '@/Components/Common/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import AuthGoogleButton from '@/Components/Partials/Auth/AuthGoogleButton';
import AuthImage from '@/Components/Partials/Auth/AuthImage';
import AuthLayout from '@/Components/Partials/Auth/AuthLayout';
import AuthLinkSwitch from '@/Components/Partials/Auth/AuthLinkSwitch';
import AuthTitle from '@/Components/Partials/Auth/AuthTitle';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Masuk" />
            <AuthLayout>
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                    <AuthTitle title="Masuk" />
                    <form onSubmit={submit}>
                        <div className="mx-auto mt-8 block w-full max-w-md font-normal">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                placeholder="Masukkan email anda"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mx-auto mt-4 block w-full max-w-md font-normal">
                            <InputLabel htmlFor="password" value="Kata Sandi" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                placeholder="Masukkan kata sandi anda"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mx-auto mt-4 flex w-full max-w-md items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Ingat saya
                                </span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Lupa kata sandi?
                                </Link>
                            )}
                        </div>

                        <div className="flex flex-col items-center">
                            <PrimaryButton
                                className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                disabled={processing}
                            >
                                Masuk
                            </PrimaryButton>
                        </div>

                        <AuthGoogleButton disabled={processing} />
                        <AuthLinkSwitch type="login" />
                    </form>
                </div>
                <AuthImage />
            </AuthLayout>
        </>
    );
}
