import { FaTrash } from 'react-icons/fa';

export default function StepList({ steps, onAdd, onUpdate, onRemove }) {
    return (
        <div className="mb-4">
            <h3 className="text-md mb-2 font-medium">Langkah-langkah</h3>
            <div className="space-y-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="w-6 pt-2 text-sm text-gray-700">
                            {index + 1}.
                        </div>
                        <input
                            type="text"
                            value={step}
                            onChange={(e) => onUpdate(index, e.target.value)}
                            placeholder={`Langkah ke-${index + 1}`}
                            className="flex-1 rounded border px-3 py-2 text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="mt-1 text-gray-500 hover:text-red-500"
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={onAdd}
                    className="w-full rounded border border-blue-300 py-2 text-center text-sm text-blue-600 hover:bg-blue-50"
                >
                    + Tambah Langkah-langkah
                </button>
            </div>
        </div>
    );
}
