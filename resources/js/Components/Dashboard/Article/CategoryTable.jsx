import { useState } from 'react';
import CategoryRow from './CategoryRow';

export default function CategoryTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null);

    const categories = [
        { name: 'Kesehatan Mental', count: 10 },
        { name: 'Nutrisi Anak', count: 7 },
        { name: 'Tips Keluarga', count: 5 },
        { name: 'Pola Makan Sehat', count: 6 },
        { name: 'Olahraga', count: 4 },
    ];

    const filteredCategories = categories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">

                <div className="mt-3 flex flex-wrap items-center gap-2 md:ml-auto md:mt-0">
                    <input
                        type="text"
                        placeholder="Cari kategori..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />
                    <button className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        + Tambah Kategori
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left text-sm">
                    <thead className="border-b text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Nama Kategori
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Jumlah Artikel
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, index) => (
                                <CategoryRow
                                    key={index}
                                    index={index}
                                    name={category.name}
                                    count={category.count}
                                    isOpen={openRowIndex === index}
                                    onToggle={() =>
                                        setOpenRowIndex(
                                            openRowIndex === index
                                                ? null
                                                : index,
                                        )
                                    }
                                />
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="px-4 py-4 text-center text-gray-500"
                                >
                                    Tidak ada kategori ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
