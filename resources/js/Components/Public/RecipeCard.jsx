import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

const RecipeCard = ({ title, imageUrl, link }) => {
    const [saved, setSaved] = useState(false);

    const toggleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="relative overflow-hidden rounded-2xl shadow-md">
            <img
                src={imageUrl}
                alt={title}
                className="h-auto w-full rounded-2xl object-cover"
            />

            <div className="absolute bottom-6 left-4 right-4 flex min-h-[100px] flex-col justify-between rounded-2xl bg-[#70B9BE] bg-opacity-95 px-5 py-5 text-white shadow-lg sm:min-h-[120px]">
                <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug sm:text-lg md:text-xl">
                    <a href={link} className="hover:underline">
                        {title}
                    </a>
                </h3>
                <div className="flex items-center justify-between text-sm sm:text-base">
                    <span>223 Kalori • 20 menit</span>
                    <button onClick={toggleSave} className="text-white">
                        {saved ? (
                            <FaBookmark className="h-6 w-6 sm:h-7 sm:w-7" />
                        ) : (
                            <FaRegBookmark className="h-6 w-6 sm:h-7 sm:w-7" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
