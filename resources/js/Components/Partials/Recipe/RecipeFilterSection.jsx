import FilterButton from '@/Components/Common/FilterButton';
import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import FilterOptions from '@/data/FilterOptions';
import resepData from '@/data/resepData';

export default function RecipeFilterSection() {
    // Gabungkan semua resep dari seluruh kategori
    const allRecipes = [];

    const kategoriUtama = [
        'hidangan',
        'kondisi',
        'diet',
        'alergi',
        'nutrisi',
        'metode',
    ];

    kategoriUtama.forEach((kategori) => {
        Object.entries(resepData[kategori] || {}).forEach(
            ([subkategori, resep]) => {
                resep.forEach((item) => {
                    allRecipes.push({
                        ...item,
                        kategori,
                        subkategori,
                    });
                });
            },
        );
    });

    // Ambil 8 resep pertama
    const displayedRecipes = allRecipes.slice(0, 8);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="FILTER RESEP"
                    title="Gunakan filter untuk menemukan resep yang sesuai dengan kebutuhan dan selera Anda!"
                />

                <div className="mb-4 flex flex-wrap gap-2">
                    {Object.entries(FilterOptions)
                        .filter(([label]) => label !== 'Artikel')
                        .map(([label, options], index) => (
                            <FilterButton
                                key={index}
                                text={label}
                                options={options}
                            />
                        ))}
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {displayedRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.judul}
                            imageUrl={recipe.gambar}
                            link={`/recipe/${recipe.kategori}/${recipe.subkategori}/${recipe.slug}`}
                        />
                    ))}
                </div>

                <MoreButton href="/recipe" text="Lihat Resep Lainnya" />
            </div>
        </section>
    );
}
