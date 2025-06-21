import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function SharedProfile({ mustVerifyEmail, status }) {
    return (
        <>
            <Head title="Profil Saya" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 space-y-6 p-6 md:p-8">
                    <h1 className="mb-2 text-2xl font-bold text-gray-800">
                        Profil Saya
                    </h1>

                    <div className="space-y-6">
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
