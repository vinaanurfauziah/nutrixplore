import { router } from '@inertiajs/react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

export default function MeasurementRow({
    id,
    name,
    symbol,
    type,
    isOpen,
    onToggle,
}) {
    const handleEdit = () => {
        router.get(route('dashboard.recipe.measurement-units.edit', id));
    };

    const handleDelete = () => {
        if (confirm(`Yakin ingin menghapus satuan \"${name}\"?`)) {
            console.log('Hapus:', name);
        }
    };

    return (
        <tr className="relative border-t">
            <td className="px-4 py-3 font-medium text-gray-800">{name}</td>
            <td className="px-4 py-3 text-gray-700">{symbol}</td>
            <td className="px-4 py-3 text-gray-700">{type}</td>
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
                            <FiEdit2 size={16} /> Edit Satuan
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                            <FiTrash2 size={16} /> Hapus Satuan
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
}
