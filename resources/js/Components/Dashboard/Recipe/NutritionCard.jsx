import { FaTrash } from 'react-icons/fa';
import  { useState } from 'react';
export default function NutritionCard({ nutritions, setNutritions }) {
  const addNutrition = () => {
    const last = nutritions[nutritions.length - 1];
    if (last && (!last.nama || !last.jumlah)) return;

    setNutritions([
      ...nutritions,
      { jumlah: '', takaran: 'gram', nama: '' },
    ]);
  };

  const updateNutrition = (index, field, value) => {
    const updated = [...nutritions];
    updated[index][field] = field === 'jumlah' ? parseFloat(value) || '' : value;
    setNutritions(updated);
  };

  const removeNutrition = (index) => {
    const updated = [...nutritions];
    updated.splice(index, 1);
    setNutritions(updated);
  };

  return (
    <div className="mb-6 rounded border bg-white p-4 shadow">
      <h2 className="mb-4 text-lg font-semibold">Informasi Nutrisi per Porsi</h2>
      <div className="space-y-3">
        {nutritions.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* jumlah */}
            <input
              type="number"
              placeholder="0"
              value={item.jumlah ?? ''}
              onChange={(e) => updateNutrition(index, 'jumlah', e.target.value)}
              className="w-16 rounded border px-2 py-1 text-sm"
              aria-label={`Jumlah nutrisi ke-${index + 1}`}
            />

            {/* takaran */}
            <select
              value={item.takaran ?? 'gram'}
              onChange={(e) => updateNutrition(index, 'takaran', e.target.value)}
              className="w-24 rounded border px-2 py-1 text-sm"
              aria-label={`Takaran nutrisi ke-${index + 1}`}
            >
              <option value="gram">gram</option>
              <option value="mg">mg</option>
              <option value="kcal">kcal</option>
              <option value="IU">IU</option>
            </select>

            {/* nama */}
            <input
              type="text"
              placeholder="Nama nutrisi (misal: Kalori)"
              value={item.nama ?? ''}
              onChange={(e) => updateNutrition(index, 'nama', e.target.value)}
              className="flex-1 rounded border px-2 py-1 text-sm"
              aria-label={`Nama nutrisi ke-${index + 1}`}
            />

            {/* hapus */}
            <button
              type="button"
              onClick={() => removeNutrition(index)}
              className="text-gray-500 hover:text-red-500"
              aria-label={`Hapus nutrisi ke-${index + 1}`}
            >
              <FaTrash size={16} />
            </button>
          </div>
        ))}

        {/* tombol tambah */}
        <button
          type="button"
          onClick={addNutrition}
          className="w-full rounded border border-blue-300 py-2 text-center text-sm text-blue-600 hover:bg-blue-50"
        >
          + Tambah Informasi Nutrisi
        </button>
      </div>
    </div>
  );
}
