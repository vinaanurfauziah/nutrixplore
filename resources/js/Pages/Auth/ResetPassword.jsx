import AutentikasiImage from '@/Assets/autentikasi.png';
import InputError from '@/Components/Common/InputError';
import InputLabel from '@/Components/Common/InputLabel';
import PrimaryButton from '@/Components/Common/PrimaryButton';
import TextInput from '@/Components/Common/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Reset Password" />
            <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-100">
                <div className="flex h-full w-full bg-white shadow-md">
                    <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                        <h1 className="mb-2 mt-6 text-center font-sans text-4xl font-bold text-gray-950">
                            Reset Kata Sandi
                        </h1>

                        <div className="my-3 flex justify-center text-sm text-gray-600">
                            <p className="block max-w-[400px] text-center">
                                Silakan masukkan kata sandi baru Anda yang
                                berbeda dari yang sebelumnya digunakan.
                            </p>
                        </div>

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
                                    autoComplete="new-password"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            {/* ========== KONFIRMASI KATA SANDI ========== */}
                            <div className="mx-auto mt-4 block w-full max-w-md font-normal">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Konfirmasi Kata Sandi"
                                />

                                <TextInput
                                    type="password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                                    placeholder="Konfrmasi kata sandi anda"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            'password_confirmation',
                                            e.target.value,
                                        )
                                    }
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            {/* ========== TOMBOL RESET KATA SANDI ========== */}
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Reset Kata Sandi
                                </PrimaryButton>
                            </div>
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
