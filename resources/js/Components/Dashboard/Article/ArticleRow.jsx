// resources/js/Components/Dashboard/Article/ArticleRow.jsx
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

export default function ArticleRow({ title, category, isOpen, onToggle }) {
    const handleEdit = () => {
        console.log('Edit Artikel:', title);
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
                <div className="mx-auto h-10 w-10 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-3">{category}</td>
            <td className="relative px-4 py-3">
                <button
                    onClick={onToggle}
                    className="text-gray-600 hover:text-gray-900"
                >
                    <FiMoreVertical size={18} />
                </button>

                {isOpen && (
                    <div className="absolute right-4 top-10 z-10 w-40 rounded-md border bg-white shadow-md">
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
            </td>
        </tr>
    );
}
