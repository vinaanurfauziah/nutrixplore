import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import StepList from './StepList';
import NutritionPerServing from './NutritionPerServing';

export default function RecipeDetailCard() {
    const [ingredients, setIngredients] = useState([
        { amount: '', unit: 'gram', name: '' },
    ]);

    const [steps, setSteps] = useState(['']);

    const addIngredient = () =>
        setIngredients([...ingredients, { amount: '', unit: 'gram', name: '' }]);

    const removeIngredient = (index) => {
        const updated = [...ingredients];
        updated.splice(index, 1);
        setIngredients(updated);
    };

    const updateIngredient = (index, field, value) => {
        const updated = [...ingredients];
        updated[index][field] = value;
        setIngredients(updated);
    };

    const addStep = () => setSteps([...steps, '']);

    const updateStep = (index, value) => {
        const updated = [...steps];
        updated[index] = value;
        setSteps(updated);
    };

    const removeStep = (index) => {
        const updated = [...steps];
        updated.splice(index, 1);
        setSteps(updated);
    };

    return (
        <div className="rounded border p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold">Detail Resep</h2>

            {/* Bahan-bahan */}
            <div className="mb-6 space-y-3">
                {ingredients.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="number"
                            value={item.amount}
                            placeholder="0"
                            onChange={(e) =>
                                updateIngredient(index, 'amount', e.target.value)
                            }
                            className="w-16 rounded border px-2 py-1 text-sm"
                        />
                        <select
                            value={item.unit}
                            onChange={(e) =>
                                updateIngredient(index, 'unit', e.target.value)
                            }
                            className="w-24 rounded border px-2 py-1 text-sm"
                        >
                            <option value="gram">gram</option>
                            <option value="ml">ml</option>
                            <option value="sdt">sdt</option>
                            <option value="sdm">sdm</option>
                        </select>
                        <input
                            type="text"
                            value={item.name}
                            placeholder="Masukkan bahan masakan"
                            onChange={(e) =>
                                updateIngredient(index, 'name', e.target.value)
                            }
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

            {/* Langkah-langkah */}
            <StepList
                steps={steps}
                onAdd={addStep}
                onUpdate={updateStep}
                onRemove={removeStep}
            />

            {/* Informasi Nutrisi */}
            <NutritionPerServing />
        </div>
    );
}
