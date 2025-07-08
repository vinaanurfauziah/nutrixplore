import { useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

export default function SubcategoryRow({ nama, slug, kategori, isOpen, onToggle }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
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

    // ✅ Di sinilah letaknya
    const handleEdit = () => {
        router.get(`/dashboard/recipe/category-recipe/edit-subkategori/${slug}`);
    };

    const handleDelete = () => {
        if (confirm(`Yakin ingin menghapus subkategori "${nama}"?`)) {
            console.log('Menghapus subkategori:', slug);
            // Tambahkan logic hapus backend jika ada
        }
    };

    return (
        <tr className="relative border-t">
            <td className="px-4 py-2">{kategori}</td>
            <td className="px-4 py-2 font-medium">{nama}</td>
            <td className="px-4 py-2 text-gray-500 hidden md:table-cell">{slug}</td>
            <td className="relative px-4 py-2">
                <div ref={menuRef} className="relative">
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
                                <FiEdit2 size={16} /> Edit Subkategori
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                                <FiTrash2 size={16} /> Hapus Subkategori
                            </button>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}
