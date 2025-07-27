import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function StepCard({ steps, setSteps, errors = {} }) {
  const addStep = () => {
    const last = steps[steps.length - 1];
    if (last && (!last.deskripsi || last.deskripsi.trim() === '')) return;

    setSteps([...steps, { deskripsi: '' }]);
  };

  const updateStep = (index, value) => {
    const updated = [...steps];
    updated[index].deskripsi = value;
    setSteps(updated);
  };

  const removeStep = (index) => {
    const updated = [...steps];
    updated.splice(index, 1);
    setSteps(updated);
  };

  return (
    <div className="mb-6 rounded border bg-white p-4 shadow">
      <h2 className="mb-4 text-lg font-semibold">Langkah-langkah Memasak</h2>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-2">
            <textarea
              placeholder={`Langkah ${index + 1}`}
              value={step.deskripsi ?? ''}
              onChange={(e) => updateStep(index, e.target.value)}
              className="flex-1 rounded border px-2 py-1 text-sm"
              rows={2}
              aria-label={`Langkah ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="text-gray-500 hover:text-red-500"
              aria-label={`Hapus langkah ke-${index + 1}`}
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
          + Tambah Langkah
        </button>
      </div>

      {/* Error Global (opsional) */}
      {errors.steps && (
        <p className="mt-2 text-sm text-red-500">{errors.steps}</p>
      )}
    </div>
  );
}
