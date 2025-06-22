import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import resepData from '@/data/resepData';

export default function LatestRecipeSection() {
    // Gabungkan semua kategori resep jadi satu array datar
    const allRecipes = [
        ...resepData.hidangan.sarapan,
        ...resepData.hidangan.pembuka,
        ...resepData.hidangan.utama,
        ...resepData.hidangan.penutup,
        ...resepData.hidangan.pelengkap,
        ...resepData.hidangan.cemilan,
        ...resepData.hidangan.berkuah,
        ...resepData.hidangan.minuman,
        ...resepData.kondisi.diabetes,
        ...resepData.kondisi.hipertensi,
        ...resepData.diet.rendah_karbo,
        ...resepData.diet.tinggi_protein,
        ...resepData.alergi.bebas_gluten,
        ...resepData.alergi.bebas_laktosa,
        ...resepData.nutrisi.tinggi_serat,
        ...resepData.nutrisi.kaya_vitamin,
        ...resepData.metode.kukus,
        ...resepData.metode.rebus,
        ...resepData.metode.panggang,
    ];

    // Ambil hanya 4 resep pertama
    const latestRecipes = allRecipes.slice(0, 4);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="RESEP TERBARU"
                    title="Lihatlah resep terbaru kami dan temukan resep favorit baru."
                />
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {latestRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.judul}
                            imageUrl={recipe.gambar}
                            link={`/recipe/${recipe.slug}`}
                        />
                    ))}
                </div>
                <MoreButton href="/recipe" text="Lihat Resep Lainnya" />
            </div>
        </section>
    );
}
