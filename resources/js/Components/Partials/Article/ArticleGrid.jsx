import ArticleCard from '@/Components/Public/ArticleCard';

export default function ArticleGrid({ articles, duplicate = false }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={duplicate ? `second-${index}` : index}
                        category={article.category}
                        title={article.title}
                        description={article.description}
                        imageUrl={article.imageUrl}
                        link={article.link}
                    />
                ))}
            </div>
            {duplicate && <div className="my-12"></div>}
        </>
    );
}
