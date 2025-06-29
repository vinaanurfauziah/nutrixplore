import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: '',
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.recipe.categories.store'));
    };

    return (
        <>
            <Head title="Tambah Kategori Resep" />

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

                <main className="max-w-full flex-1 overflow-x-hidden px-4 py-4 sm:px-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Tambah Kategori' }]}
                    />

                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Tambah Kategori Resep
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="max-w-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Nama Kategori
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="max-w-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Jenis Kategori
                                </label>
                                <select
                                    value={data.type}
                                    onChange={(e) =>
                                        setData('type', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                    required
                                >
                                    <option value="">
                                        -- Pilih Jenis Kategori --
                                    </option>
                                    <option value="Hidangan">Hidangan</option>
                                    <option value="Kondisi Kesehatan">
                                        Kondisi Kesehatan
                                    </option>
                                    <option value="Diet">Diet</option>
                                    <option value="Alergi">Alergi</option>
                                    <option value="Nutrisi">Nutrisi</option>
                                    <option value="Metode Memasak">
                                        Metode Memasak
                                    </option>
                                </select>
                                {errors.type && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.type}
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    Simpan Kategori
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
