import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function NutritionCard() {
    const [nutritions, setNutritions] = useState([
        { amount: '', unit: 'gram', name: '' },
    ]);

    const addNutrition = () => {
        setNutritions([...nutritions, { amount: '', unit: 'gram', name: '' }]);
    };

    const updateNutrition = (index, field, value) => {
        const updated = [...nutritions];
        updated[index][field] = value;
        setNutritions(updated);
    };

    const removeNutrition = (index) => {
        const updated = [...nutritions];
        updated.splice(index, 1);
        setNutritions(updated);
    };

    return (
        <div className="mb-6 rounded border bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold">
                Informasi Nutrisi per Porsi
            </h2>
            <div className="space-y-3">
                {nutritions.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="0"
                            value={item.amount}
                            onChange={(e) =>
                                updateNutrition(index, 'amount', e.target.value)
                            }
                            className="w-16 rounded border px-2 py-1 text-sm"
                        />
                        <select
                            value={item.unit}
                            onChange={(e) =>
                                updateNutrition(index, 'unit', e.target.value)
                            }
                            className="w-24 rounded border px-2 py-1 text-sm"
                        >
                            <option value="gram">gram</option>
                            <option value="mg">mg</option>
                            <option value="kcal">kcal</option>
                            <option value="IU">IU</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Nama nutrisi (misal: Kalori)"
                            value={item.name}
                            onChange={(e) =>
                                updateNutrition(index, 'name', e.target.value)
                            }
                            className="flex-1 rounded border px-2 py-1 text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => removeNutrition(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                ))}
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
