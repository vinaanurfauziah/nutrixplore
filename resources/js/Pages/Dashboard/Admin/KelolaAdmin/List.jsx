import AdminRow from '@/Components/Dashboard/Admin/AdminRow';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

export default function List() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const dummyAdmins = [
        { id: 1, name: 'Admin Utama', email: 'admin@example.com' },
        { id: 2, name: 'Admin Kedua', email: 'admin2@example.com' },
    ];

    const filteredAdmins = dummyAdmins.filter(
        (admin) =>
            admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            admin.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Daftar Admin" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Desktop */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Sidebar Mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        onClick={toggleSidebar}
                    >
                        <div
                            className="absolute left-0 top-0 z-50 h-full w-64 bg-white shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <DashboardSidebar onClose={toggleSidebar} />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 px-4 py-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Daftar Admin' }]}
                    />

                    <h1 className="text-2xl font-bold text-gray-800">
                        Daftar Admin
                    </h1>

                    <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
                        {/* Filter & Actions */}
                        <div className="mb-4">
                            {/* Desktop Version */}
                            <div className="hidden md:flex md:items-center md:gap-4">
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
                                    className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                                >
                                    + Tambah Admin
                                </Link>
                            </div>

                            {/* Mobile Version (Icon Only) */}
                            <div className="flex items-center gap-4 md:hidden">
                                <button
                                    onClick={() => setShowSearch(!showSearch)}
                                    className="text-[#70B9BE]"
                                    title="Cari Admin"
                                >
                                    <FiSearch size={20} />
                                </button>
                                <Link
                                    href={route(
                                        'dashboard.kelola-admin.create',
                                    )}
                                    className="text-[#70B9BE]"
                                    title="Tambah Admin"
                                >
                                    <FiPlus size={20} />
                                </Link>
                            </div>

                            {/* Input Search Mobile */}
                            {showSearch && (
                                <div className="mt-2 md:hidden">
                                    <input
                                        type="text"
                                        placeholder="Cari admin..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Table */}
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
                                                id={admin.id}
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
