import AdminRow from '@/Components/Dashboard/Admin/AdminRow';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ListAdmin() {
    const [searchQuery, setSearchQuery] = useState('');

    const dummyAdmins = [
        { id: 1, name: 'Admin Utama', email: 'admin@example.com' },
        { id: 2, name: 'Admin Kedua', email: 'admin2@example.com' },
    ];

    const filteredAdmins = dummyAdmins.filter(
        (admin) =>
            admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            admin.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <>
            <Head title="Daftar Admin" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Main content */}
                <main className="flex-1 p-6 md:p-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Daftar Admin
                    </h1>

                    {/* Spasi antara judul dan tabel */}
                    <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
                        {/* Filter dan tombol tambah */}
                        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
                            <div className="mt-3 flex flex-wrap items-center gap-2 md:ml-auto md:mt-0">
                                <input
                                    type="text"
                                    placeholder="Cari admin..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                                />
                                <Link
                                    href={route(
                                        'dashboard.kelola-admin.create',
                                    )}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    + Tambah Admin
                                </Link>
                            </div>
                        </div>

                        {/* Tabel Admin */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto text-left text-sm">
                                <thead className="border-b text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold">
                                            Nama
                                        </th>
                                        <th className="px-4 py-3 font-semibold">
                                            Email
                                        </th>
                                        <th className="px-4 py-3 font-semibold">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-800">
                                    {filteredAdmins.length > 0 ? (
                                        filteredAdmins.map((admin) => (
                                            <AdminRow
                                                key={admin.id}
                                                name={admin.name}
                                                email={admin.email}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="px-4 py-4 text-center text-gray-500"
                                            >
                                                Tidak ada admin ditemukan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
