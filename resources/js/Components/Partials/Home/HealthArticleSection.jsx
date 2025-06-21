import ArticleCard from '@/Components/Public/ArticleCard';
import articles from '@/data/articles';

export default function HealthArticleSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                    ARTIKEL KESEHATAN
                </h5>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                    Lihatlah artikel kesehatan kami dan temukan artikel yang
                    relevan dengan Anda.
                </h2>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            category={article.category}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            link={article.link}
                        />
                    ))}
                </div>
                <div className="py-8 text-center">
                    <a
                        href="/article"
                        className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-white hover:bg-[#51979e]"
                    >
                        Lihat Artikel Lainnya
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
