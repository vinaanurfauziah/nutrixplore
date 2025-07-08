import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';
import kategoriData from '@/data/kategoriData';

export default function EditSubkategori({ slug }) {
    let foundSub = null;
    let parentSlug = '';
    for (const [kategoriSlug, kategori] of Object.entries(kategoriData)) {
        for (const sub of kategori.subkategori) {
            if (sub.slug === slug) {
                foundSub = sub;
                parentSlug = kategoriSlug;
                break;
            }
        }
        if (foundSub) break;
    }

    if (!foundSub) {
        return (
            <div className="p-6 text-red-600 font-semibold">
                Subkategori tidak ditemukan.
            </div>
        );
    }

    const { data, setData, post, processing, errors } = useForm({
        nama: foundSub.nama,
        icon: foundSub.icon,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subkategori disimpan:', { slug, ...data });
        alert('Subkategori berhasil diperbarui! (simulasi)');
    };

    return (
        <>
            <Head title="Edit Subkategori Resep" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Edit Subkategori Resep
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="max-w-lg">
                                <label
                                    htmlFor="nama"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama Subkategori
                                </label>
                                <input
                                    id="nama"
                                    type="text"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData('nama', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.nama && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.nama}
                                    </p>
                                )}
                            </div>

                            <div className="max-w-lg">
                                <label
                                    htmlFor="icon"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Icon (nama komponen)
                                </label>
                                <input
                                    id="icon"
                                    type="text"
                                    value={data.icon}
                                    onChange={(e) =>
                                        setData('icon', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.icon && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.icon}
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
