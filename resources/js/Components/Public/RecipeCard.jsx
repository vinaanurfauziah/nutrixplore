import SaveButton from '@/Components/Common/SaveButton';

const RecipeCard = ({
    title,
    imageUrl,
    link,
    kalori,
    durasi,
    onSave,
    onUnsave,
}) => {
    return (
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
            <div className="aspect-[3/4] w-full">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>

            <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-[#70B9BE]/95 px-3 py-2 text-white shadow-md sm:bottom-4 sm:left-4 sm:right-4 sm:px-4 sm:py-3">
                <div className="flex h-full flex-col justify-between">
                    <h3 className="line-clamp-2 min-h-[2.8rem] text-sm font-semibold leading-snug sm:min-h-[3.2rem] sm:text-base md:text-lg">
                        <a href={link} className="hover:underline">
                            {title}
                        </a>
                    </h3>

                    <div className="mt-1 flex items-center justify-between text-xs text-white/90 sm:text-sm">
                        <p className="truncate">
                            {kalori} Kalori • {durasi} menit
                        </p>
                        <SaveButton
                            onSave={onSave}
                            onUnsave={onUnsave}
                            className="ml-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
