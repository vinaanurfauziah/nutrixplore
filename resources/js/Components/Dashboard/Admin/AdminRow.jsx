import { router } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

export default function AdminRow({ id, name, email }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleEdit = () => {
        router.get(route('dashboard.kelola-admin.edit', id));
    };

    const handleDelete = () => {
        if (confirm(`Yakin ingin menghapus admin "${name}"?`)) {
            console.log('Menghapus admin:', name);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <tr className="relative border-t">
            <td className="px-4 py-3 font-medium text-gray-800">{name}</td>
            <td className="px-4 py-3">{email}</td>
            <td className="relative px-4 py-3">
                <div ref={menuRef} className="relative inline-block">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
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
                                <FiEdit2 size={16} /> Edit Admin
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                                <FiTrash2 size={16} /> Hapus Admin
                            </button>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}
