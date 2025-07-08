import { useEffect, useRef } from 'react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';
import { router } from '@inertiajs/react';

export default function ArticleRow({
    title,
    category,
    imageUrl,
    slug, // ← penting: menerima prop slug
    isOpen,
    onToggle,
}) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                onToggle(null);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    const handleEdit = () => {
        router.get(`/dashboard/article/edit/${slug}`);
    };

    const handleDelete = () => {
        if (confirm(`Yakin ingin menghapus artikel "${title}"?`)) {
            console.log('Hapus Artikel:', title);
        }
    };

    return (
        <tr className="relative border-t">
            <td className="px-4 py-3">{title}</td>
            <td className="px-4 py-3">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-10 w-10 rounded object-cover"
                />
            </td>
            <td className="px-4 py-3">{category}</td>
            <td className="relative px-4 py-3">
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={onToggle}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <FiMoreVertical size={18} />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 top-8 z-10 w-40 rounded-md border bg-white shadow-md">
                            <button
                                onClick={handleEdit}
                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <FiEdit2 size={16} /> Edit Artikel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                                <FiTrash2 size={16} /> Hapus Artikel
                            </button>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}
