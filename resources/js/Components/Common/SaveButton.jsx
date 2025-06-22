import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function SaveButton({ className = '' }) {
    const [saved, setSaved] = useState(false);
    const toggleSave = () => setSaved(!saved);

    return (
        <button onClick={toggleSave} className={`text-white ${className}`}>
            {saved ? (
                <FaBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
                <FaRegBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
        </button>
    );
}
