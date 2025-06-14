import { router } from '@inertiajs/react';
import { useState } from 'react';
import ArticleRow from './ArticleRow';

export default function ArticleTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [openRowIndex, setOpenRowIndex] = useState(null);

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
            {/* Header dan Filter */}
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-lg font-semibold">Daftar Artikel</h2>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <input
                        type="text"
                        placeholder="Cari nama artikel..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
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
                    <button
                        onClick={() => router.get('/dashboard/article/create')}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
                    >
                        Tambah Artikel
                    </button>
                </div>
            </div>

            {/* Table */}
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
// File: resources/js/Components/Dashboard/Article/ArticleRow.jsx
