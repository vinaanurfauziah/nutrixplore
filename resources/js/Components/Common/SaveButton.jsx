// resources/js/Components/Common/SaveButton.jsx
import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function SaveButton({ className = '', onSave, onUnsave }) {
    const [saved, setSaved] = useState(false);

    const handleClick = () => {
        if (saved) {
            setSaved(false);
            onUnsave?.(); // ❌ batal simpan
        } else {
            setSaved(true);
            onSave?.(); // ✅ simpan
        }
    };

    return (
        <button onClick={handleClick} className={`text-white ${className}`}>
            {saved ? (
                <FaBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
                <FaRegBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
        </button>
    );
}
