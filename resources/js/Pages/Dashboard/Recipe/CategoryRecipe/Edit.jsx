import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ category }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name || '',
        type: category.type || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Update kategori:', data);
        alert('Kategori berhasil diperbarui!');
    };

    return (
        <>
            <Head title="Edit Kategori Resep" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <div className="max-w-2xl rounded-lg bg-white p-6 shadow-sm">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Edit Kategori Resep
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
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
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Jenis Kategori
                                </label>
                                <select
                                    value={data.type}
                                    onChange={(e) =>
                                        setData('type', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                >
                                    <option value="">-- Pilih Jenis --</option>
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
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300"
                                >
                                    Perbarui Kategori
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
