import { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function SaveButton({
    className = '',
    onSave,
    onUnsave,
    showLabel = false,
    labelSaved = 'Tersimpan',
    labelUnsaved = 'Simpan Resep',
    isSaved = false,
    articleId, // ✅ Tambahkan
}) {
    const [saved, setSaved] = useState(isSaved);

    useEffect(() => {
        setSaved(isSaved);
    }, [isSaved]);

    const handleClick = () => {
        if (saved) {
            setSaved(false);
            onUnsave?.(articleId); // ✅ Kirim ID artikel
        } else {
            setSaved(true);
            onSave?.(articleId); // ✅ Kirim ID artikel
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center gap-2 ${className}`}
        >
            {saved ? (
                <FaBookmark className="h-5 w-5 sm:h-6 sm:w-6 text-white-500" />
            ) : (
                <FaRegBookmark className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            )}
            {showLabel && (
                <span className="inline text-sm">
                    {saved ? labelSaved : labelUnsaved}
                </span>
            )}
        </button>
    );
}