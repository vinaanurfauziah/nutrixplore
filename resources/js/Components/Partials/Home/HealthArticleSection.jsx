import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleCard from '@/Components/Public/ArticleCard';
import artikelData from '@/data/artikelData';

export default function HealthArticleSection() {
    // Ambil hanya 4 artikel pertama
    const articlesToDisplay = artikelData.slice(0, 4);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="ARTIKEL KESEHATAN"
                    title="Lihatlah artikel kesehatan kami dan temukan artikel yang relevan dengan Anda."
                />
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {articlesToDisplay.map((article, index) => (
                        <ArticleCard
                            key={index}
                            category={article.category}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            link={`/article/${article.slug}`}
                        />
                    ))}
                </div>
                <MoreButton href="/article" text="Lihat Artikel Lainnya" />
            </div>
        </section>
    );
}
