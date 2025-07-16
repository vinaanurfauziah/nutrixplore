import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import kategoriData from '@/data/kategoriData';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateSubkategori() {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        kategoriSlug: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const kategori = kategoriData[data.kategoriSlug];
        if (!kategori) {
            alert('Kategori induk tidak ditemukan!');
            return;
        }

        console.log('Subkategori baru:', {
            nama: data.nama,
            slug: data.nama.toLowerCase().replace(/\s+/g, '-'),
            kategori: kategori.nama,
            kategoriSlug: data.kategoriSlug,
        });

        alert('Subkategori berhasil ditambahkan!');
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Tambah Subkategori Resep" />
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
                                label: 'Subkategori Resep',
                                href: '/dashboard/recipe/category-recipe',
                            },
                            { label: 'Tambah Subkategori Resep' },
                        ]}
                    />
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Tambah Subkategori Resep
                    </h1>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="max-w-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Nama Subkategori
                                </label>
                                <input
                                    type="text"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData('nama', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                    required
                                />
                                {errors.nama && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.nama}
                                    </p>
                                )}
                            </div>

                            <div className="max-w-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Kategori Induk
                                </label>
                                <select
                                    value={data.kategoriSlug}
                                    onChange={(e) =>
                                        setData('kategoriSlug', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                    required
                                >
                                    <option value="">
                                        -- Pilih Kategori --
                                    </option>
                                    {Object.entries(kategoriData).map(
                                        ([slug, kategori]) => (
                                            <option key={slug} value={slug}>
                                                {kategori.nama}
                                            </option>
                                        ),
                                    )}
                                </select>
                                {errors.kategoriSlug && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.kategoriSlug}
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300"
                                >
                                    Simpan Subkategori
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
