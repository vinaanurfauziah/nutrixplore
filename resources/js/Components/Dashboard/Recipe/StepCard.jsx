import { FaTrash } from 'react-icons/fa';

export default function StepCard({ steps, setSteps }) {
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
        <div className="mb-6 rounded border bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold">
                Langkah-langkah Memasak
            </h2>
            <div className="space-y-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded border bg-gray-100 text-sm font-semibold text-gray-700">
                            {index + 1}
                        </div>

                        <input
                            type="text"
                            placeholder={`Langkah ke-${index + 1}`}
                            value={step}
                            onChange={(e) => updateStep(index, e.target.value)}
                            className="flex-1 rounded border px-3 py-2 text-sm"
                        />

                        <button
                            type="button"
                            onClick={() => removeStep(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addStep}
                    className="w-full rounded border border-blue-300 py-2 text-center text-sm text-blue-600 hover:bg-blue-50"
                >
                    + Tambah Langkah-langkah
                </button>
            </div>
        </div>
    );
}
