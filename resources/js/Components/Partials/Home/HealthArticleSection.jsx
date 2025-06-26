import { motion } from 'framer-motion';
import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleCard from '@/Components/Public/ArticleCard';
import artikelData from '@/data/artikelData';

export default function HealthArticleSection() {
    const articlesToDisplay = artikelData.slice(0, 4);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                {/* Section heading dengan animasi scroll */}
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

                {/* Grid artikel dengan animasi staggered */}
                <motion.div
                    className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 mt-10"
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
                        />
                    ))}
                </motion.div>

                {/* Tombol More dengan animasi */}
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
        </section>
    );
}
