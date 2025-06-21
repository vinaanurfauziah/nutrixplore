import { router } from '@inertiajs/react';
import { useState } from 'react';
import RecipeRow from './RecipeRow';

export default function RecipeTable({ showTitle = true }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDish, setFilterDish] = useState('All');
    const [openRowIndex, setOpenRowIndex] = useState(null);

    const recipes = [
        {
            name: 'Smoothie Pisang Almond',
            dish: 'Minuman',
            conditions: 'Penyakit Jantung, Diabetes',
            diet: 'Dairy Free, Vegan',
            allergy: 'Almond (Tree Nuts)',
            nutrition: 'High Fiber, Low Sugar',
        },
        {
            name: 'Oatmeal Buah Berry',
            dish: 'Sarapan',
            conditions: 'Penyakit Jantung, Diabetes',
            diet: 'Vegan, Gluten Free',
            allergy: 'Gluten',
            nutrition: 'High Fiber, Low Sugar',
        },
        {
            name: 'Ayam Panggang Lemon',
            dish: 'Makanan Utama',
            conditions: 'Kesehatan Tulang, Penyakit Jantung',
            diet: 'High Protein, Low Carb',
            allergy: '-',
            nutrition: 'High Protein, Low Fat',
        },
    ];

    const filteredRecipes = recipes.filter((recipe) => {
        const matchSearch = recipe.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchFilter = filterDish === 'All' || recipe.dish === filterDish;
        return matchSearch && matchFilter;
    });

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    {showTitle && (
                        <h2 className="text-lg font-semibold">Daftar Resep</h2>
                    )}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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
                        <option value="All">Semua Hidangan</option>
                        <option value="Minuman">Minuman</option>
                        <option value="Sarapan">Sarapan</option>
                        <option value="Makanan Utama">Makanan Utama</option>
                    </select>

                    <button
                        onClick={() => router.get('/dashboard/recipe/create')}
                        className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                    >
                        + Tambah Resep
                    </button>
                </div>
            </div>

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
                                    name={recipe.name}
                                    dish={recipe.dish}
                                    conditions={recipe.conditions}
                                    diet={recipe.diet}
                                    allergy={recipe.allergy}
                                    nutrition={recipe.nutrition}
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
