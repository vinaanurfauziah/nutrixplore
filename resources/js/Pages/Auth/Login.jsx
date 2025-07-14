import { Head, useForm } from '@inertiajs/react';

// Layout & Section
import AuthGoogleButton from '@/Components/Partials/Auth/AuthGoogleButton';
import AuthImage from '@/Components/Partials/Auth/AuthImage';
import AuthLayout from '@/Components/Partials/Auth/AuthLayout';
import AuthLinkSwitch from '@/Components/Partials/Auth/AuthLinkSwitch';
import AuthTitle from '@/Components/Partials/Auth/AuthTitle';

// Form Support
import FormInputGroup from '@/Components/Common/FormInputGroup';
import PrimaryButton from '@/Components/Common/PrimaryButton';
import RememberMeAndReset from '@/Components/Partials/Auth/RememberMeAndReset';

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
                        <FormInputGroup
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            placeholder="Masukkan email anda"
                            label="Email"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                        />

                        <FormInputGroup
                            id="password"
                            name="password"
                            type="password"
                            value={data.password}
                            placeholder="Masukkan kata sandi anda"
                            label="Kata Sandi"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            error={errors.password}
                        />

                        <RememberMeAndReset
                            remember={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                            canReset={canResetPassword}
                        />

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
