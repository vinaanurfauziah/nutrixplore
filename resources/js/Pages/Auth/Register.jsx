import { Head, useForm } from '@inertiajs/react';

import FormInputGroup from '@/Components/Common/FormInputGroup';
import PrimaryButton from '@/Components/Common/PrimaryButton';
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
                        <FormInputGroup
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Masukkan nama anda"
                            label="Nama"
                            autoComplete="name"
                            error={errors.name}
                            isFocused
                        />

                        <FormInputGroup
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Masukkan email anda"
                            label="Email"
                            autoComplete="username"
                            error={errors.email}
                        />

                        <FormInputGroup
                            id="password"
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            placeholder="Masukkan kata sandi anda"
                            label="Kata Sandi"
                            autoComplete="new-password"
                            error={errors.password}
                        />

                        <FormInputGroup
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            placeholder="Konfirmasi kata sandi anda"
                            label="Konfirmasi Kata Sandi"
                            autoComplete="new-password"
                            error={errors.password_confirmation}
                        />

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
