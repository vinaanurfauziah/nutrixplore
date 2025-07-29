import { FaTrash } from 'react-icons/fa';

export default function IngredientCard({ ingredients, setIngredients }) {
    const addIngredient = () => {
        const last = ingredients[ingredients.length - 1];
        if (last && (!last.nama || !last.jumlah)) return;

        setIngredients([
            ...ingredients,
            { jumlah: '', takaran: 'gram', nama: '' },
        ]);
    };
    const updateIngredient = (index, field, value) => {
        const updated = [...ingredients];
        updated[index][field] = value; // jangan ubah ke number
        setIngredients(updated);
    };

    const removeIngredient = (index) => {
        const updated = [...ingredients];
        updated.splice(index, 1);
        setIngredients(updated);
    };

    return (
        <div className="mb-6 rounded border bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold">Bahan-bahan Masakan</h2>
            <div className="space-y-3">
                {ingredients.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {/* jumlah */}
                        <input
                            type="number"
                            placeholder="0"
                            value={item.jumlah}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    'jumlah',
                                    e.target.value,
                                )
                            }
                            className="w-16 rounded border px-2 py-1 text-sm"
                            aria-label={`Jumlah bahan ke-${index + 1}`}
                        />

                        {/* takaran */}
                        <select
                            value={item.takaran}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    'takaran',
                                    e.target.value,
                                )
                            }
                            className="w-24 rounded border px-2 py-1 text-sm"
                            aria-label={`Takaran bahan ke-${index + 1}`}
                        >
                            <option value="gram">gram</option>
                            <option value="ml">ml</option>
                            <option value="sdt">sdt</option>
                            <option value="sdm">sdm</option>
                        </select>

                        {/* nama */}
                        <input
                            type="text"
                            placeholder="Masukkan bahan masakan"
                            value={item.nama}
                            onChange={(e) =>
                                updateIngredient(index, 'nama', e.target.value)
                            }
                            className="flex-1 rounded border px-2 py-1 text-sm"
                            aria-label={`Nama bahan ke-${index + 1}`}
                        />

                        {/* hapus */}
                        <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="text-gray-500 hover:text-red-500"
                            aria-label={`Hapus bahan ke-${index + 1}`}
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                ))}

                {/* tombol tambah */}
                <button
                    type="button"
                    onClick={addIngredient}
                    className="w-full rounded border border-blue-300 py-2 text-center text-sm text-[#70B9BE] hover:bg-blue-50"
                >
                    + Tambah Bahan-bahan
                </button>
            </div>
        </div>
    );
}
