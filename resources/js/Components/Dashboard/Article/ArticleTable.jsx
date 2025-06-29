import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';
import ArticleRow from './ArticleRow';

export default function ArticleTable({ showTitle = true }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const articles = [
        {
            title: 'Tips Memasak Tanpa Minyak untuk Diet Sehat',
            category: 'Tips Masak Sehat',
        },
        {
            title: '5 Bahan Makanan Tinggi Serat untuk Menjaga Kesehatan Pencernaan',
            category: 'Bahan Makanan',
        },
        {
            title: 'Panduan Pola Makan Rendah Garam untuk Penderita Hipertensi',
            category: 'Kondisi Kesehatan',
        },
    ];

    const filteredArticles = articles.filter((article) => {
        const matchSearch = article.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchFilter =
            filterCategory === 'All' || article.category === filterCategory;
        return matchSearch && matchFilter;
    });

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {showTitle && (
                    <h2 className="text-lg font-semibold">Daftar Artikel</h2>
                )}
            </div>

            {/* Desktop Filters */}
            <div className="mb-4 hidden flex-col gap-2 sm:flex-row sm:items-center md:flex">
                <input
                    type="text"
                    placeholder="Cari nama artikel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                />
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                >
                    <option value="All">Semua Kategori</option>
                    <option value="Tips Masak Sehat">Tips Masak Sehat</option>
                    <option value="Bahan Makanan">Bahan Makanan</option>
                    <option value="Kondisi Kesehatan">Kondisi Kesehatan</option>
                </select>
                <button
                    onClick={() => router.get('/dashboard/article/create')}
                    className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                >
                    + Tambah Artikel
                </button>
            </div>

            {/* Mobile Icons */}
            <div className="mb-4 flex items-center gap-4 md:hidden">
                <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="text-[#70B9BE]"
                    title="Cari"
                >
                    <FiSearch size={20} />
                </button>
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="text-[#70B9BE]"
                    title="Filter Kategori"
                >
                    <FiFilter size={20} />
                </button>
                <button
                    onClick={() => router.get('/dashboard/article/create')}
                    className="text-[#70B9BE]"
                    title="Tambah Artikel"
                >
                    <FiPlus size={20} />
                </button>
            </div>

            {/* Mobile Search Input */}
            {showSearch && (
                <div className="mb-2 md:hidden">
                    <input
                        type="text"
                        placeholder="Cari nama artikel..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />
                </div>
            )}

            {/* Mobile Filter Select */}
            {showFilter && (
                <div className="mb-2 md:hidden">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    >
                        <option value="All">Semua Kategori</option>
                        <option value="Tips Masak Sehat">
                            Tips Masak Sehat
                        </option>
                        <option value="Bahan Makanan">Bahan Makanan</option>
                        <option value="Kondisi Kesehatan">
                            Kondisi Kesehatan
                        </option>
                    </select>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto whitespace-nowrap text-left text-sm">
                    <thead className="border-b text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Nama Artikel
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Gambar
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Kategori
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article, index) => (
                                <ArticleRow
                                    key={index}
                                    index={index}
                                    title={article.title}
                                    category={article.category}
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
                                    colSpan="4"
                                    className="px-4 py-4 text-center text-gray-500"
                                >
                                    Tidak ada artikel yang ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
