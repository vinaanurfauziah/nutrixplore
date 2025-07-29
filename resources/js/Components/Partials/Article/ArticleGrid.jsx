import ArticleCard from '@/Components/Public/ArticleCard';

export default function ArticleGrid({
    articles,
    duplicate = false,
    onSave,
    onUnsave,
}) {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                {articles.map((article, index) => (
                    <div
                        key={duplicate ? `second-${index}` : index}
                        className="transition-transform duration-300 transform hover:scale-105"
                    >
                        <ArticleCard
                            category={article.category}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.image}
                            slug={article.slug}
                            onSave={onSave}
                            onUnsave={onUnsave}
                            isSaved={article.is_saved}
                        />
                    </div>
                ))}
            </div>
            {duplicate && <div className="my-12"></div>}
        </>
    );
}
