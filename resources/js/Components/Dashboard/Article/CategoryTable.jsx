// resources/js/Components/Dashboard/Article/CategoryTable.jsx
import { useState } from 'react';
import CategoryRow from './CategoryRow';

export default function CategoryTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null); // Tambahkan ini

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
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-lg font-semibold">Kategori Artikel</h2>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                        type="text"
                        placeholder="Cari kategori..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1">
                        Tambah Kategori
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left text-sm">
                    <thead className="border-b text-gray-600">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Nama Kategori</th>
                            <th className="px-4 py-3 font-semibold">Jumlah Artikel</th>
                            <th className="px-4 py-3 font-semibold">Aksi</th>
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
                                        setOpenRowIndex(openRowIndex === index ? null : index)
                                    }
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
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
