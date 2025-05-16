import AutentikasiImage from '@/Assets/autentikasi.png';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

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

            <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-100">
                <div className="flex h-full w-full bg-white shadow-md">
                    <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <h1 className="mb-2 mt-6 text-center font-sans text-4xl font-bold text-gray-950">
                            Daftar
                        </h1>

                        {/* ========== FORM ========== */}
                        <form onSubmit={submit}>
                            {/* ========== NAME/USERNAME ========== */}
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

                            {/* ========== EMAIL ========== */}
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

                            {/* ========== KATA SANDI ========== */}
                            <div className="mx-auto mt-4 block w-full max-w-md">
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

                            {/* ========== KONFIRMASI KATA SANDI ========== */}
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

                            {/* ========== TOMBOL DAFTAR ========== */}
                            <div className="text-center text-sm font-medium text-gray-600">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Daftar
                                </PrimaryButton>
                            </div>

                            {/* ========== TOMBOL DAFTAR DENGAN GOOGLE ========== */}
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Daftar dengan Google
                                </PrimaryButton>

                                <div className="mx-auto mt-8 w-full max-w-md border-t border-gray-300"></div>
                            </div>

                            {/* ========== LINK SUDAH MEMILIKI AKUN? ========== */}
                            <p className="mt-6 text-center text-sm font-normal text-gray-600">
                                Sudah memiliki akun?
                                <a
                                    href={route('login')}
                                    className="ml-1 mt-4 inline-flex text-sm font-medium text-black hover:text-gray-600"
                                >
                                    Login di sini
                                </a>
                            </p>
                        </form>
                    </div>

                    {/* ========== GAMBAR AUTENTIKASI ========== */}
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src={AutentikasiImage}
                            alt="Login Illustration"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
