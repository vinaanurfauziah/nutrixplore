import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function SaveButton({
    className = '',
    onSave,
    onUnsave,
    showLabel = false,
    labelSaved = 'Tersimpan',
    labelUnsaved = 'Simpan Resep',
}) {
    const [saved, setSaved] = useState(false);

    const handleClick = () => {
        if (saved) {
            setSaved(false);
            onUnsave?.();
        } else {
            setSaved(true);
            onSave?.();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center gap-2 ${className}`}
        >
            {saved ? (
                <FaBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
                <FaRegBookmark className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
            {showLabel && (
                <span className="inline text-sm">
                    {saved ? labelSaved : labelUnsaved}
                </span>
            )}
        </button>
    );
}
