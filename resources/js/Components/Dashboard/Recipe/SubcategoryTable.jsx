import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import SubcategoryRow from './SubcategoryRow';

export default function SubcategoryTable() {
    const { subcategories = [] } = usePage().props;

    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const filtered = subcategories.filter((sub) => {
        const kategori = sub?.category ?? '';
        const nama = sub?.name ?? '';
        return (
            nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            kategori.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            {/* Header Filter */}
            <div className="mb-4">
                {/* Desktop controls */}
                <div className="hidden gap-2 sm:flex">
                    <input
                        type="text"
                        placeholder="Cari subkategori atau kategori..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />
                    <button
                        onClick={() => router.get('/dashboard/recipe/category-recipe/create')}
                        className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                    >
                        + Tambah Subkategori
                    </button>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-[#70B9BE]"
                        title="Cari"
                    >
                        <FiSearch size={20} />
                    </button>
                    <button
                        onClick={() => router.get('/dashboard/recipe/category-recipe/create')}
                        className="text-[#70B9BE]"
                        title="Tambah Subkategori"
                    >
                        <FiPlus size={20} />
                    </button>
                </div>

                {/* Search input for mobile */}
                {showSearch && (
                    <div className="mt-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Cari subkategori atau kategori..."
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
                            <th className="px-4 py-3">Kategori</th>
                            <th className="px-4 py-3">Nama Subkategori</th>
                            <th className="px-4 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filtered.length > 0 ? (
                            filtered.map((sub, idx) => (
                                <SubcategoryRow
                                    key={`${sub.type}-${sub.id}`}
                                    id={sub.id}
                                    nama={sub.name}
                                    kategori={sub.category}
                                    kategoriType={sub.type}
                                    isOpen={openMenuIndex === idx}
                                    onToggle={() =>
                                        setOpenMenuIndex(openMenuIndex === idx ? null : idx)
                                    }
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                                    Tidak ada subkategori atau kategori yang cocok.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
