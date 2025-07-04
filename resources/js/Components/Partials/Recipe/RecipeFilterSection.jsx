import FilterButton from '@/Components/Common/FilterButton';
import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import FilterOptions from '@/data/FilterOptions';
import getAllRecipes from '@/data/getAllRecipes';
import { useMemo, useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function RecipeFilterSection({ onSave, onUnsave }) {
    const [activeFilters, setActiveFilters] = useState([]);
    const allRecipes = getAllRecipes();

    const handleFilterChange = (label) => {
        setActiveFilters((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    const groupedFilters = useMemo(() => {
        const groups = {};
        Object.entries(FilterOptions).forEach(([category, options]) => {
            options.forEach((option) => {
                if (activeFilters.includes(option)) {
                    if (!groups[category]) groups[category] = [];
                    groups[category].push(option);
                }
            });
        });
        return groups;
    }, [activeFilters]);

    const filteredRecipes = useMemo(() => {
        if (activeFilters.length === 0) return allRecipes;

        return allRecipes.filter((resep) => {
            if (!Array.isArray(resep.labels)) return false;
            return activeFilters.every((label) => resep.labels.includes(label));
        });
    }, [activeFilters, allRecipes]);

    const displayedRecipes = filteredRecipes;

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <div>
                    <SectionHeading
                        subtitle="FILTER RESEP"
                        title="Gunakan filter untuk menemukan resep yang sesuai dengan kebutuhan dan selera Anda!"
                    />
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {Object.entries(FilterOptions)
                        .filter(([label]) => label !== 'Artikel')
                        .map(([label, options], index) => (
                            <FilterButton
                                key={index}
                                text={label}
                                options={options}
                                selectedOptions={options.filter((opt) =>
                                    activeFilters.includes(opt)
                                )}
                                onChange={(option) =>
                                    handleFilterChange(option)
                                }
                            />
                        ))}
                </div>

                {activeFilters.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {Object.entries(groupedFilters).map(
                            ([category, options]) =>
                                options.map((option) => (
                                    <span
                                        key={`${category}-${option}`}
                                        className="flex items-center gap-2 rounded-full bg-[#70B9BE] px-4 py-1 text-sm text-white"
                                    >
                                        <span>
                                            <span className="font-semibold">
                                                {category}:
                                            </span>{' '}
                                            {option}
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleFilterChange(option)
                                            }
                                            className="ml-1 rounded-full p-1 text-white hover:bg-white/20"
                                        >
                                            <FiX className="text-xs" />
                                        </button>
                                    </span>
                                ))
                        )}
                        <button
                            onClick={() => setActiveFilters([])}
                            className="rounded-full bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-600"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}

                {displayedRecipes.length > 0 ? (
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                        {displayedRecipes.map((recipe) => (
                            <div key={recipe.id}>
                                <RecipeCard
                                    title={recipe.judul}
                                    imageUrl={recipe.gambar}
                                    link={`/recipe/${recipe.kategori}/${recipe.subkategori}/${recipe.slug}`}
                                    kalori={recipe.kalori}
                                    durasi={recipe.durasi}
                                    onSave={onSave}
                                    onUnsave={onUnsave}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        Tidak ada resep ditemukan untuk filter yang dipilih.
                    </p>
                )}
            </div>
        </section>
    );
}
