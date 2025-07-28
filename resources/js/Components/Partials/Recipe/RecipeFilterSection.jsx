import FilterButton from '@/Components/Common/FilterButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import { router } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function RecipeFilterSection({ recipes = [], filterOptions = {}, activeFilters: initialFilters = [], onSave, onUnsave }) {

    const [activeFilters, setActiveFilters] = useState(initialFilters);

    const handleFilterChange = (label) => {
        let updatedFilters = activeFilters.includes(label)
            ? activeFilters.filter((item) => item !== label)
            : [...activeFilters, label];

        setActiveFilters(updatedFilters);

        router.get(route('recipe.index'), { filters: updatedFilters }, {
            preserveState: true,
            preserveScroll: true,
        });
    };
const dynamicFilterOptions = useMemo(() => ({
    'Hidangan': filterOptions.dish || [],
    'Kondisi Kesehatan': filterOptions.health?.map(h => h.name) || [],
    'Diet': filterOptions.diet?.map(d => d.name) || [],
    'Alergi': filterOptions.allergy?.map(a => a.name) || [],
    'Nutrisi': filterOptions.nutrition?.map(n => n.name) || [],
    'Metode Memasak': filterOptions.cooking || [],
}), [filterOptions]);


    const groupedFilters = useMemo(() => {
        const groups = {};
        Object.entries(dynamicFilterOptions).forEach(([category, options]) => {
            options.forEach((option) => {
                if (activeFilters.includes(option)) {
                    if (!groups[category]) groups[category] = [];
                    groups[category].push(option);
                }
            });
        });
        return groups;
    }, [activeFilters, dynamicFilterOptions]);

    const recipesWithLabels = useMemo(() => {
        return recipes.map((recipe) => {
            const labels = [
                ...recipe.diet_tags?.map((tag) => tag.name) || [],
                ...recipe.health_tags?.map((tag) => tag.name) || [],
                ...recipe.allergy_tags?.map((tag) => tag.name) || [],
                ...recipe.nutrition_tags?.map((tag) => tag.name) || [],
                recipe.kategori_hidangan,
                recipe.metode_memasak,
            ];
            return { ...recipe, labels };
        });
    }, [recipes]);

    const filteredRecipes = useMemo(() => {
        if (activeFilters.length === 0) return recipesWithLabels;

        return recipesWithLabels.filter((recipe) => {
            if (!Array.isArray(recipe.labels)) return false;
            return activeFilters.every((label) => recipe.labels.includes(label));
        });
    }, [activeFilters, recipesWithLabels]);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="FILTER RESEP"
                    title="Gunakan filter untuk menemukan resep yang sesuai dengan kebutuhan dan selera Anda!"
                />

                <div className="mb-4 flex flex-wrap gap-2">
                    {Object.entries(dynamicFilterOptions).map(([label, options], index) => (
                        <FilterButton
                            key={index}
                            text={label}
                            options={options}
                            selectedOptions={options.filter(opt => activeFilters.includes(opt))}
                            onChange={(option) => handleFilterChange(option)}
                        />
                    ))}
                </div>

                {activeFilters.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {Object.entries(groupedFilters).map(([category, options]) =>
                            options.map((option) => (
                                <span
                                    key={`${category}-${option}`}
                                    className="flex items-center gap-2 rounded-full bg-[#70B9BE] px-4 py-1 text-sm text-white"
                                >
                                    <span>
                                        <span className="font-semibold">{category}:</span> {option}
                                    </span>
                                    <button
                                        onClick={() => handleFilterChange(option)}
                                        className="ml-1 rounded-full p-1 text-white hover:bg-white/20"
                                    >
                                        <FiX className="text-xs" />
                                    </button>
                                </span>
                            ))
                        )}
                        <button
                            onClick={() => {
                                setActiveFilters([]);
                                router.get(route('recipe.index'), {}, {
                                    preserveState: true,
                                    preserveScroll: true,
                                });
                            }}
                            className="rounded-full bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-600"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}

                {filteredRecipes.length > 0 ? (
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                        {filteredRecipes.map((recipe) => (
                            <div key={recipe.id}>
                                <RecipeCard
                                    title={recipe.judul}
                                    imageUrl={recipe.gambar}
                                    link={`/recipe/${recipe.kategori_hidangan}/${recipe.slug}`}
                                    kalori={recipe.kalori}
                                    durasi={recipe.durasi}
                                    onSave={() => onSave(recipe.id)}
                                    onUnsave={() => onUnsave(recipe.id)}
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
