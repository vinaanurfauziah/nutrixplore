import PrimaryButton from '@/Components/Common/PrimaryButton';
import AuthDescription from '@/Components/Partials/Auth/AuthDescription';
import AuthFieldGroup from '@/Components/Partials/Auth/AuthFieldGroup';
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

                        <form onSubmit={submit}>
                            <AuthFieldGroup
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                value={data.email}
                                placeholder="Masukkan email anda"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                error={errors.email}
                            />

                            <AuthFieldGroup
                                id="password"
                                name="password"
                                type="password"
                                label="Kata Sandi"
                                value={data.password}
                                placeholder="Masukkan kata sandi anda"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                error={errors.password}
                                isFocused
                            />

                            <AuthFieldGroup
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                label="Konfirmasi Kata Sandi"
                                value={data.password_confirmation}
                                placeholder="Konfirmasi kata sandi anda"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                                error={errors.password_confirmation}
                            />

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
