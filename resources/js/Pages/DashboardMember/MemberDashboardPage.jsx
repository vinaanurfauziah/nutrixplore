import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function MemberDashboardPage() {
    return (
        <>
            <Head title="Dashboard Member" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Selamat Datang, Member!
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <p className="text-gray-600">
                            Ini adalah dashboard khusus member. Di sini nantinya
                            kamu bisa melihat resep pribadi, menyimpan artikel
                            favorit, dan lainnya.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
