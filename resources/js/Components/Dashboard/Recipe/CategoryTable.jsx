import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import CategoryRow from './CategoryRow';

export default function CategoryTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

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
            {/* Header */}
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-lg font-semibold">Daftar Kategori</h2>
            </div>

            {/* Kontrol */}
            <div className="mb-4">
                {/* Desktop controls */}
                <div className="hidden flex-col gap-2 sm:flex-row sm:items-center md:flex">
                    <input
                        type="text"
                        placeholder="Cari kategori..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />

                    <button
                        onClick={() =>
                            router.get('/dashboard/recipe/categories/create')
                        }
                        className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                    >
                        + Tambah Kategori
                    </button>
                </div>

                {/* Mobile controls (icons) */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-[#70B9BE]"
                        title="Cari Kategori"
                    >
                        <FiSearch size={20} />
                    </button>

                    <button
                        onClick={() =>
                            router.get('/dashboard/recipe/categories/create')
                        }
                        className="text-[#70B9BE]"
                        title="Tambah Kategori"
                    >
                        <FiPlus size={20} />
                    </button>
                </div>

                {/* Mobile search input */}
                {showSearch && (
                    <div className="mt-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Cari kategori..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
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
