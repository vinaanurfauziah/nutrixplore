import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';
import CategoryFilterDropdown from './CategoryFilterDropdown';
import RecipeRow from './RecipeRow';

export default function     RecipeTable({ showTitle = true }) {
  const { recipes = [] } = usePage().props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDish, setFilterDish] = useState('All');
  const [openRowIndex, setOpenRowIndex] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchSearch = recipe.judul
      ?.toLowerCase()
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
      {/* ... bagian filter dan tombol ... */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto whitespace-nowrap text-left text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">Nama Resep</th>
              <th className="px-4 py-3 text-sm font-semibold">Gambar</th>
              <th className="px-4 py-3 text-sm font-semibold">Hidangan</th>
              <th className="px-4 py-3 text-sm font-semibold">Kondisi Kesehatan</th>
              <th className="px-4 py-3 text-sm font-semibold">Diet</th>
              <th className="px-4 py-3 text-sm font-semibold">Alergi</th>
              <th className="px-4 py-3 text-sm font-semibold">Nutrisi</th>
              <th className="px-4 py-3 text-sm font-semibold">Metode</th>
              <th className="px-4 py-3 text-sm font-semibold">Aksi</th>
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