import SaveButton from '@/Components/Common/SaveButton';

const ArticleCard = ({ category, title, description, imageUrl, slug }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg">
            <img
                src={imageUrl}
                alt={title}
                className="h-72 w-full rounded-2xl object-cover sm:h-80 md:h-96 lg:h-[420px]"
            />

            <div className="absolute bottom-6 left-4 right-4 rounded-2xl bg-[#70B9BE] bg-opacity-95 px-5 py-5 text-white shadow-lg">
                <span className="text-sm font-medium uppercase tracking-wide text-white/90">
                    {category}
                </span>
                <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug sm:text-lg md:text-xl">
                    <a href={`/article/${slug}`} className="hover:underline">
                        {title}
                    </a>
                </h3>
                <div className="mt-2 flex items-center justify-between text-sm text-white/80 sm:text-base">
                    <p>{description}</p>
                    <SaveButton className="ml-2" />
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
