import ArticleCard from '@/Components/Public/ArticleCard';
import { motion } from 'framer-motion';

export default function ArticleGrid({
    articles,
    duplicate = false,
    onSave,
    onUnsave,
}) {
    return (
        <>
            <motion.div
                className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {articles.map((article, index) => (
                    <motion.div
                        key={duplicate ? `second-${index}` : index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <ArticleCard
                            category={article.category}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            slug={article.slug}
                            onSave={onSave}
                            onUnsave={onUnsave}
                        />
                    </motion.div>
                ))}
            </motion.div>
            {duplicate && <div className="my-12"></div>}
        </>
    );
}
