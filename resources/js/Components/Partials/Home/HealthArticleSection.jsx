import MoreButton from '@/Components/Common/MoreButton';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleCard from '@/Components/Public/ArticleCard';
import artikelData from '@/data/artikelData';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HealthArticleSection() {
    const articlesToDisplay = artikelData.slice(0, 4);
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Artikel dibatalkan penyimpanannya');
    };

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
                        subtitle="ARTIKEL KESEHATAN"
                        title="Lihatlah artikel kesehatan kami dan temukan artikel yang relevan dengan Anda."
                    />
                </motion.div>

                <motion.div
                    className="mt-10 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {articlesToDisplay.map((article, index) => (
                        <ArticleCard
                            key={index}
                            category={article.category}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            slug={article.slug}
                            onSave={handleSave}
                            onUnsave={handleUnsave}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="mt-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <MoreButton href="/article" text="Lihat Artikel Lainnya" />
                </motion.div>
            </div>

            {showPopup && (
                <SaveSuccessPopup
                    type="artikel"
                    onClose={() => setShowPopup(false)}
                />
            )}
        </section>
    );
}
