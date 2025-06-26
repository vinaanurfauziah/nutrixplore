import { useState } from 'react';
import { motion } from 'framer-motion';
import FilterButton from '@/Components/Common/FilterButton';
import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import FilterOptions from '@/data/FilterOptions';
import resepData from '@/data/resepData';
import kategoriData from '@/data/kategoriData';

export default function RecipeFilterSection() {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const getLabelSubkategori = (kategoriSlug, subSlug) => {
        const sub = kategoriData?.[kategoriSlug]?.subkategori.find(
            (item) => item.slug === subSlug
        );
        return sub?.nama || subSlug;
    };

    const allRecipes = [];
    const kategoriUtama = Object.keys(resepData);

    kategoriUtama.forEach((kategoriSlug) => {
        const subkategoris = resepData[kategoriSlug] || {};
        Object.entries(subkategoris).forEach(([subkategoriSlug, resepList]) => {
            resepList.forEach((resep) => {
                allRecipes.push({
                    ...resep,
                    kategori: kategoriSlug,
                    subkategori: subkategoriSlug,
                    labelSubkategori: getLabelSubkategori(kategoriSlug, subkategoriSlug),
                });
            });
        });
    });

    const handleFilterChange = (label) => {
        setSelectedFilters((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    const filteredRecipes =
        selectedFilters.length === 0
            ? allRecipes
            : allRecipes.filter((resep) =>
                  selectedFilters.includes(resep.labelSubkategori)
              );

    const displayedRecipes = filteredRecipes.slice(0, 8);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        subtitle="FILTER RESEP"
                        title="Gunakan filter untuk menemukan resep yang sesuai dengan kebutuhan dan selera Anda!"
                    />
                </motion.div>

                <motion.div
                    className="mb-4 flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    {Object.entries(FilterOptions)
                        .filter(([label]) => label !== 'Artikel')
                        .map(([label, options], index) => (
                            <FilterButton
                                key={index}
                                text={label}
                                options={options}
                                onChange={handleFilterChange}
                            />
                        ))}
                </motion.div>

                {displayedRecipes.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {displayedRecipes.map((recipe) => (
                            <motion.div
                                key={recipe.id}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <RecipeCard
                                    title={recipe.judul}
                                    imageUrl={recipe.gambar}
                                    link={`/recipe/${recipe.kategori}/${recipe.subkategori}/${recipe.slug}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        Tidak ada resep ditemukan untuk filter yang dipilih.
                    </p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 flex justify-center"
                >
                    <MoreButton href="/recipe" text="Lihat Resep Lainnya" />
                </motion.div>
            </div>
        </section>
    );
}
