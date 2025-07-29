import { router } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { FiEdit2, FiMoreVertical, FiTrash2 } from 'react-icons/fi';

const colorMap = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
};

export default function RecipeRow({
   id, judul, image, slug, dish, conditions, diet, allergy, nutrition, method, isOpen, onToggle,
}) {
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

const handleEdit = () => {
  router.get(route('dashboard.recipe.edit', id), {
    preserveState: true,
    preserveScroll: true,
  });
  onToggle(null); // Tutup menu setelah klik edit
};

  const handleDelete = () => {
    if (confirm(`Yakin ingin menghapus resep "${judul}"?`)) {
      router.delete(route('dashboard.recipe.destroy', id));
    }
  };

  const renderTags = (tags, color = 'blue') => {
    if (!Array.isArray(tags) || tags.length === 0) {
      return <span className="text-gray-400">-</span>;
    }

    return tags.map((tag, i) => (
      <span
        key={i}
        className={`mr-1 mb-1 inline-block rounded px-2 py-1 text-xs ${colorMap[color]}`}
      >
        {tag.name || '-'}
      </span>
    ));
  };

  return (
    <tr className="relative border-t">
      <td className="px-4 py-3">{judul}</td>
      <td className="px-4 py-3">
        <img
          src={image?.startsWith('http') ? image : `/storage/${image}`}
          alt={judul}
          className="h-12 w-12 rounded object-cover"
        />
      </td>
      <td className="px-4 py-3">{dish || '-'}</td>
      <td className="px-4 py-3">{renderTags(conditions, 'blue')}</td>
      <td className="px-4 py-3">{renderTags(diet, 'green')}</td>
      <td className="px-4 py-3">{renderTags(allergy, 'red')}</td>
      <td className="px-4 py-3">{renderTags(nutrition, 'yellow')}</td>
      <td className="px-4 py-3">{method || '-'}</td>
      <td className="relative px-4 py-3">
        <div ref={menuRef} className="relative">
          <button
            onClick={() => onToggle(id)} // ✅ fixed
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
        </div>
      </td>
    </tr>
  );
}

