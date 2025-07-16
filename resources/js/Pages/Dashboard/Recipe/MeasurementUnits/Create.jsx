import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        symbol: '',
        type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.recipe.measurement-units.store'));
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Tambah Satuan Takaran" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

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

                <main className="flex-1 p-6 md:p-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[
                            {
                                label: 'Satuan Takaran',
                                href: '/dashboard/recipe/measurement-units',
                            },
                            { label: 'Tambah Satuan Takaran' },
                        ]}
                    />
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Tambah Satuan Takaran
                    </h1>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="max-w-lg">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama Satuan
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="max-w-lg">
                                <label
                                    htmlFor="symbol"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Simbol
                                </label>
                                <input
                                    id="symbol"
                                    type="text"
                                    value={data.symbol}
                                    onChange={(e) =>
                                        setData('symbol', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.symbol && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.symbol}
                                    </p>
                                )}
                            </div>

                            <div className="max-w-lg">
                                <label
                                    htmlFor="type"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Jenis Satuan
                                </label>
                                <select
                                    id="type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData('type', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                >
                                    <option value="">-- Pilih Jenis --</option>
                                    <option value="Berat">Berat</option>
                                    <option value="Volume">Volume</option>
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
                                    Simpan Satuan
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
