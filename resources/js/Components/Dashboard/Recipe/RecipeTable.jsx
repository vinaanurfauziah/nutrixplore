import getAllRecipesAdmin from '@/data/getAllRecipesAdmin';
import kategoriData from '@/data/kategoriData';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';
import RecipeRow from './RecipeRow';

export default function RecipeTable({ showTitle = true }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDish, setFilterDish] = useState('All');
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const recipes = getAllRecipesAdmin();

    const dishOptions = [
        'All',
        ...kategoriData.hidangan.subkategori.map((s) => s.nama),
    ];

    const filteredRecipes = recipes.filter((recipe) => {
        const matchSearch = recipe.judul
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchFilter = filterDish === 'All' || recipe.dish === filterDish;
        return matchSearch && matchFilter;
    });

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            {/* Judul */}
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {showTitle && (
                    <h2 className="text-lg font-semibold">Daftar Resep</h2>
                )}
            </div>

            {/* Filter & Aksi */}
            <div className="mb-4">
                {/* Desktop Version */}
                <div className="hidden flex-col gap-2 sm:flex-row sm:items-center md:flex">
                    <input
                        type="text"
                        placeholder="Cari nama resep..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />
                    <select
                        value={filterDish}
                        onChange={(e) => setFilterDish(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    >
                        {dishOptions.map((dish, idx) => (
                            <option key={idx} value={dish}>
                                {dish === 'All' ? 'Semua Hidangan' : dish}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={() => router.get('/dashboard/recipe/create')}
                        className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                    >
                        + Tambah Resep
                    </button>
                </div>

                {/* Mobile Version (Icon Only) */}
                <div className="flex items-center gap-4 md:hidden">
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
                        title="Filter Hidangan"
                    >
                        <FiFilter size={20} />
                    </button>
                    <button
                        onClick={() => router.get('/dashboard/recipe/create')}
                        className="text-[#70B9BE]"
                        title="Tambah Resep"
                    >
                        <FiPlus size={20} />
                    </button>
                </div>

                {/* Input Search Mobile */}
                {showSearch && (
                    <div className="mt-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Cari nama resep..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                        />
                    </div>
                )}

                {/* Filter Select Mobile */}
                {showFilter && (
                    <div className="mt-2 md:hidden">
                        <select
                            value={filterDish}
                            onChange={(e) => setFilterDish(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                        >
                            {dishOptions.map((dish, idx) => (
                                <option key={idx} value={dish}>
                                    {dish === 'All' ? 'Semua Hidangan' : dish}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto whitespace-nowrap text-left text-sm">
                    <thead className="border-b text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Nama Resep
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Gambar
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Hidangan
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Kondisi Kesehatan
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Diet
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Alergi
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Nutrisi
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe, index) => (
                                <RecipeRow
                                    key={index}
                                    name={recipe.judul}
                                    image={recipe.gambar}
                                    slug={recipe.slug}
                                    dish={recipe.dish}
                                    conditions={recipe.kondisi}
                                    diet={recipe.diet}
                                    allergy={recipe.alergi}
                                    nutrition={recipe.nutrisi}
                                    method={recipe.metode}
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
                                    colSpan="8"
                                    className="px-4 py-4 text-center text-gray-500"
                                >
                                    Tidak ada resep yang ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
