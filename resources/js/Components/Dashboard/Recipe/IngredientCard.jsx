// resources/js/Components/Dashboard/Recipe/IngredientCard.jsx
import { FaTrash } from 'react-icons/fa';

export default function IngredientCard({ ingredients, setIngredients }) {
    const addIngredient = () => {
        setIngredients([...ingredients, { amount: '', unit: 'gram', name: '' }]);
    };

    const updateIngredient = (index, field, value) => {
        const updated = [...ingredients];
        updated[index][field] = value;
        setIngredients(updated);
    };

    const removeIngredient = (index) => {
        const updated = [...ingredients];
        updated.splice(index, 1);
        setIngredients(updated);
    };

    return (
        <div className="rounded border bg-white p-4 shadow mb-6">
            <h2 className="mb-4 text-lg font-semibold">Bahan-bahan Masakan</h2>
            <div className="space-y-3">
                {ingredients.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="0"
                            value={item.amount}
                            onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                            className="w-16 rounded border px-2 py-1 text-sm"
                        />
                        <select
                            value={item.unit}
                            onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                            className="w-24 rounded border px-2 py-1 text-sm"
                        >
                            <option value="gram">gram</option>
                            <option value="ml">ml</option>
                            <option value="sdt">sdt</option>
                            <option value="sdm">sdm</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Masukkan bahan masakan"
                            value={item.name}
                            onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                            className="flex-1 rounded border px-2 py-1 text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addIngredient}
                    className="w-full rounded border border-blue-300 py-2 text-center text-sm text-blue-600 hover:bg-blue-50"
                >
                    + Tambah Bahan-bahan
                </button>
            </div>
        </div>
    );
}
