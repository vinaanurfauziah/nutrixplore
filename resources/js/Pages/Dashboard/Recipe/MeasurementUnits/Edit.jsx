import { useEffect, useState } from 'react';
import { usePage, router, Head } from '@inertiajs/react';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import measurementData from '@/data/measurementData';

export default function Edit() {
    const { id } = usePage().props;

    const [unit, setUnit] = useState(null);

    useEffect(() => {
        const found = measurementData.find((item) => item.id === parseInt(id));
        setUnit(found);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUnit((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Berhasil memperbarui satuan "${unit.name}" (simulasi, belum ke backend).`);
        router.get('/dashboard/recipe/measurement-units');
    };

    if (!unit) return <div className="p-6 text-center text-gray-500">Satuan tidak ditemukan.</div>;

    return (
        <>
            <Head title="Edit Satuan Takaran" />
            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>
                <main className="flex-1 p-6 md:p-8">
                    <div className="max-w-2xl rounded-lg bg-white p-6 shadow-sm">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">Edit Satuan Takaran</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={unit.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Simbol</label>
                                <input
                                    type="text"
                                    name="symbol"
                                    value={unit.symbol}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Jenis</label>
                                <select
                                    name="type"
                                    value={unit.type}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                >
                                    <option value="Berat">Berat</option>
                                    <option value="Volume">Volume</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e]"
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
