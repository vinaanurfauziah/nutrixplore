import AutentikasiImage from '@/Assets/autentikasi.png';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Lupa Kata Sandi" />

            <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-100">
                <div className="flex h-full w-full bg-white shadow-md">
                    <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <h1 className="mb-2 mt-6 text-center font-sans text-4xl font-bold text-gray-950">
                            Reset Kata Sandi
                        </h1>

                        <div className="my-3 flex justify-center text-sm text-gray-600">
                            <p className="block max-w-[400px] text-center">
                                Silakan masukkan alamat email yang terhubung
                                dengan akun Anda.
                            </p>
                        </div>

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
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                            </div>

                            {/* ========== INPUT ERROR ========== */}
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />

                            {/* ========== TOMBOL KIRIM ========== */}
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                                    disabled={processing}
                                >
                                    Kirim
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
