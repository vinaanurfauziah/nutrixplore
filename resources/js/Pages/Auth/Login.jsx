import AutentikasiImage from '@/Assets/autentikasi.png';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

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

            <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-100">
                <div className="flex h-full w-full bg-white shadow-md">
                    <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <h1 className="mb-2 mt-6 text-center font-sans text-4xl font-bold text-gray-950">
                            Masuk
                        </h1>

                        {/* ========== FORM ========== */}
                        <form onSubmit={submit}>
                            {/* ========== EMAIL ========== */}
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

                            {/* ========== KATA SANDI ========== */}
                            <div className="mx-auto mt-4 block w-full max-w-md font-normal">
                                <InputLabel
                                    htmlFor="password"
                                    value="Kata Sandi"
                                />

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

                                {/* ========== INPUT ERROR ========== */}
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mx-auto mt-4 flex w-full max-w-md items-center justify-between">
                                {/* ========== CHECKBOX ========== */}
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                'remember',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Ingat saya
                                    </span>
                                </label>

                                {/* ========== LUPA KATA SANDI ========== */}
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="rounded-md text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Lupa kata sandi?
                                    </Link>
                                )}
                            </div>

                            {/* ========== TOMBOL MASUK ========== */}
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Masuk
                                </PrimaryButton>
                            </div>

                            {/* ========== TOMBOL MASUK DENGAN GOOGLE ========== */}
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Masuk dengan Google
                                </PrimaryButton>

                                <div className="mx-auto mt-8 w-full max-w-md border-t border-gray-300"></div>
                            </div>

                            {/* ========== LINK BELUM MEMILIKI AKUN? ========== */}
                            <p className="mt-6 text-center text-sm font-normal text-gray-600">
                                Belum memiliki akun?
                                <a
                                    href={route('register')}
                                    className="ml-1 mt-4 inline-flex text-sm font-medium text-black hover:text-gray-600"
                                >
                                    Daftar di sini
                                </a>
                            </p>
                        </form>
                    </div>

                    {/* ========== GAMBAR AUTENTIKASI ========== */}
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src={AutentikasiImage}
                            alt="Ilustrasi Autentikasi"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
