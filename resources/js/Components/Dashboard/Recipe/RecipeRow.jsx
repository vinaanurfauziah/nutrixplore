import { router } from '@inertiajs/react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

export default function RecipeRow({
    name,
    dish,
    conditions,
    diet,
    allergy,
    nutrition,
    isOpen,
    onToggle,
}) {
    const handleEdit = () => {
        router.get('/dashboard/resep/edit', {
            recipe: { name, dish, conditions, diet, allergy, nutrition },
        });
    };

    const handleDelete = () => {
        if (confirm(`Yakin ingin menghapus resep "${name}"?`)) {
            console.log('Menghapus resep:', name);
            // TODO: Panggil API atau routing untuk hapus
        }
    };

    return (
        <tr className="relative border-t">
            <td className="px-4 py-3">{name}</td>
            <td className="px-4 py-3">
                <div className="mx-auto h-10 w-10 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-3">{dish}</td>
            <td className="px-4 py-3">{conditions}</td>
            <td className="px-4 py-3">{diet}</td>
            <td className="px-4 py-3">{allergy}</td>
            <td className="px-4 py-3">{nutrition}</td>
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
                            <FiEdit2 size={16} /> Edit Resep
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                            <FiTrash2 size={16} /> Hapus Resep
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
}
