import { Head, useForm } from '@inertiajs/react';

import FormInputGroup from '@/Components/Common/FormInputGroup';
import PrimaryButton from '@/Components/Common/PrimaryButton';
import AuthDescription from '@/Components/Partials/Auth/AuthDescription';
import AuthImage from '@/Components/Partials/Auth/AuthImage';
import AuthLayout from '@/Components/Partials/Auth/AuthLayout';
import AuthTitle from '@/Components/Partials/Auth/AuthTitle';

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
            <AuthLayout>
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <AuthTitle title="Reset Kata Sandi" />
                    <AuthDescription>
                        Silakan masukkan alamat email yang terhubung dengan akun
                        Anda.
                    </AuthDescription>

                    <form onSubmit={submit}>
                        <FormInputGroup
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Masukkan email anda"
                            error={errors.email}
                            isFocused
                        />

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

                <AuthImage />
            </AuthLayout>
        </>
    );
}
