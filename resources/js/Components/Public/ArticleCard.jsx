import SaveButton from '@/Components/Common/SaveButton';

const ArticleCard = ({
    category,
    title,
    description,
    imageUrl,
    slug,
    articleId,
    isSaved,
    onSave,
    onUnsave,
}) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]">
            <img
                src={imageUrl}
                alt={title}
                className="h-72 w-full rounded-2xl object-cover transition-all duration-300 sm:h-80 md:h-96 lg:h-[420px]"
            />

            <div className="absolute bottom-6 left-4 right-4 rounded-2xl bg-[#70B9BE]/95 px-5 py-5 text-white shadow-lg">
                <span className="text-sm font-medium uppercase tracking-wide text-white/90">
                    {category?.name}
                </span>
                <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug sm:text-lg md:text-xl">
                    <a href={`/article/${slug}`} className="hover:underline">
                        {title}
                    </a>
                </h3>
                <div className="mt-2 flex items-center justify-between text-sm text-white/80 sm:text-base">
                    <p className="line-clamp-2 pr-2">{description}</p>
                    <SaveButton
                        articleId={articleId}
                        isSaved={isSaved}
                        onSave={onSave}
                        onUnsave={onUnsave}
                        className="ml-2"
                    />
                </div>
            </div>
        </div>
    );
};


export default ArticleCard;
