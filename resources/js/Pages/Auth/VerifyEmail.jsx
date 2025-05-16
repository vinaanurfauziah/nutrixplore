import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Verifikasi Email" />

            <h1 className="mb-2 mt-6 text-center font-sans text-4xl font-bold text-gray-950">
                Verifikasi Email Anda
            </h1>

            <div className="mb-4 mt-8 text-sm text-gray-600">
                Terima kasih! Silakan cek email dan klik link verifikasi. Belum
                menerima? Kirim ulang.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    Sebuah tautan verifikasi baru telah dikirim ke alamat email
                    yang Anda berikan saat pendaftaran.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mb-2 mt-6 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Kirim ulang email verifikasi
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Keluar
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
