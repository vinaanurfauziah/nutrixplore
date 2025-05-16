import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

const ArticleCard = ({ category, title, description, imageUrl, link }) => {
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

            <div className="absolute bottom-6 left-4 right-4 rounded-2xl bg-[#70B9BE] bg-opacity-95 px-5 py-5 text-white shadow-lg">
                <span className="text-sm font-medium uppercase tracking-wide text-white/90">
                    {category}
                </span>
                <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug sm:text-lg md:text-xl">
                    <a href={link} className="hover:underline">
                        {title}
                    </a>
                </h3>
                <div className="mt-2 flex items-center justify-between text-sm text-white/80 sm:text-base">
                    <p>{description}</p>
                    <button onClick={toggleSave} className="ml-2 text-white">
                        {saved ? (
                            <FaBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <FaRegBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
