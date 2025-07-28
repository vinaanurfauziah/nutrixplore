import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';
import CategoryFilterDropdown from './CategoryFilterDropdown';
import RecipeRow from './RecipeRow';

export default function RecipeTable({ showTitle = true }) {
  const { recipes = [] } = usePage().props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDish, setFilterDish] = useState('All');
  const [openRowIndex, setOpenRowIndex] = useState(null);

  // Proses pencarian dan filter
  const filteredRecipes = recipes.filter((recipe) => {
    const matchSearch = (recipe.judul || '')
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchFilter =
      filterDish === 'All' ||
      recipe.kategori_hidangan === filterDish ||
      recipe.metode_memasak === filterDish ||
      (recipe.diet_tags ?? []).some((tag) => tag.name === filterDish) ||
      (recipe.health_tags ?? []).some((tag) => tag.name === filterDish) ||
      (recipe.allergy_tags ?? []).some((tag) => tag.name === filterDish) ||
      (recipe.nutrition_tags ?? []).some((tag) => tag.name === filterDish);

    return matchSearch && matchFilter;
  });

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      {showTitle && (
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Daftar Resep</h2>
      )}

      {/* Filter & Tombol */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Cari nama resep..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE] sm:max-w-xs"
        />


        <button
          onClick={() => router.get(route('dashboard.recipe.create'))}
          className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
        >
          <FiPlus className="inline-block mr-1" /> Tambah Resep
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto whitespace-nowrap text-left text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Nama Resep</th>
              <th className="px-4 py-3 font-semibold">Gambar</th>
              <th className="px-4 py-3 font-semibold">Hidangan</th>
              <th className="px-4 py-3 font-semibold">Kondisi Kesehatan</th>
              <th className="px-4 py-3 font-semibold">Diet</th>
              <th className="px-4 py-3 font-semibold">Alergi</th>
              <th className="px-4 py-3 font-semibold">Nutrisi</th>
              <th className="px-4 py-3 font-semibold">Metode</th>
              <th className="px-4 py-3 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeRow
                  key={recipe.id}
                  id={recipe.id}
                  judul={recipe.judul}
                  slug={recipe.slug}
                  image={recipe.gambar}
                  dish={recipe.kategori_hidangan}
                  method={recipe.metode_memasak}
                  conditions={recipe.health_tags}
                  diet={recipe.diet_tags}
                  allergy={recipe.allergy_tags}
                  nutrition={recipe.nutrition_tags}
                  isOpen={openRowIndex === recipe.id}
                  onToggle={() =>
                    setOpenRowIndex(openRowIndex === recipe.id ? null : recipe.id)
                  }
                />
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-gray-500">
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
