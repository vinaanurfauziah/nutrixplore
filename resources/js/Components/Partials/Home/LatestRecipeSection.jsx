import MoreButton from '@/Components/Common/MoreButton';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup'; // ✅
import SectionHeading from '@/Components/Common/SectionHeading';
import RecipeCard from '@/Components/Public/RecipeCard';
import resepData from '@/data/resepData';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LatestRecipeSection() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Resep dibatalkan penyimpanannya');
    };

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

    const latestRecipes = allRecipes.slice(0, 4);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        subtitle="RESEP TERBARU"
                        title="Lihatlah resep terbaru kami dan temukan resep favorit baru."
                    />
                </motion.div>

                <motion.div
                    className="mt-10 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {latestRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.judul}
                            imageUrl={recipe.gambar}
                            link={`/recipe/${recipe.slug}`}
                            kalori={recipe.kalori}
                            durasi={recipe.durasi}
                            onSave={handleSave}
                            onUnsave={handleUnsave}
                        />
                    ))}

                    {showPopup && (
                        <SaveSuccessPopup onClose={() => setShowPopup(false)} />
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-10 text-center"
                >
                    <MoreButton href="/recipe" text="Lihat Resep Lainnya" />
                </motion.div>
            </div>
        </section>
    );
}
