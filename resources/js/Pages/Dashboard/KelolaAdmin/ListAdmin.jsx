import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, Link } from '@inertiajs/react';

export default function ListAdmin() {
    const dummyAdmins = [
        { id: 1, name: 'Admin Utama', email: 'admin@example.com' },
        { id: 2, name: 'Admin Kedua', email: 'admin2@example.com' },
    ];

    return (
        <>
            <Head title="Daftar Admin" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Daftar Admin
                        </h1>
                        <Link
                            href={route('dashboard.kelola-admin.create')}
                            className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
                        >
                            + Tambah Admin
                        </Link>
                    </div>

                    <div className="overflow-x-auto rounded-lg bg-white p-6 shadow">
                        <table className="w-full table-auto text-left text-sm text-gray-700">
                            <thead className="border-b text-gray-600">
                                <tr>
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Nama</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyAdmins.map((admin, index) => (
                                    <tr key={admin.id} className="border-t">
                                        <td className="px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2">
                                            {admin.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {admin.email}
                                        </td>
                                        <td className="px-4 py-2">
                                            <button className="text-sm text-red-600 hover:underline">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}
