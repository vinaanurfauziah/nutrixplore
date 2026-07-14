import PrimaryButton from '@/Components/Common/PrimaryButton';
import AuthDescription from '@/Components/Partials/Auth/AuthDescription';
import AuthImage from '@/Components/Partials/Auth/AuthImage';
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
                        <h1 className="mb-2 mt-6 text-center text-4xl font-bold text-gray-950">
                            Reset Kata Sandi
                        </h1>

                        <AuthDescription>
                            Silakan masukkan kata sandi baru Anda yang berbeda
                            dari yang sebelumnya digunakan.
                        </AuthDescription>
                        <form onSubmit={submit} className="mt-6 space-y-4">
                            <input
                                type="hidden"
                                name="token"
                                value={data.token}
                            />
                            <input
                                type="hidden"
                                name="email"
                                value={data.email}
                            />

                            <div className="mx-auto w-full max-w-md">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Kata Sandi Baru
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                                    autoComplete="new-password"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="mx-auto w-full max-w-md">
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Konfirmasi Kata Sandi
                                </label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            'password_confirmation',
                                            e.target.value,
                                        )
                                    }
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                                    autoComplete="new-password"
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

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

                    <AuthImage />
                </div>
            </div>
        </>
    );
}
