import { useEffect, useRef, useState } from 'react';

export default function MultiSelectCheckbox({
    label,
    name,
    options,
    selectedValues,
    onChange,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleOption = (value) => {
        if (selectedValues.includes(value)) {
            onChange(
                name,
                selectedValues.filter((item) => item !== value),
            );
        } else {
            onChange(name, [...selectedValues, value]);
        }
    };

    const removeOption = (value) => {
        onChange(
            name,
            selectedValues.filter((item) => item !== value),
        );
    };

    const formatLabel = (val) =>
        val.charAt(0).toUpperCase() + val.slice(1).replace('-', ' ');

    // 💡 Tambahkan fungsi untuk menentukan warna berdasarkan nilai
    const getColorClasses = (val) => {
        const colorMap = {
            Stroke: 'bg-orange-100 text-orange-700',
            Obesitas: 'bg-rose-100 text-rose-700',
            Hipertensi: 'bg-yellow-100 text-yellow-700',
            Paru_kronis: 'bg-teal-100 text-teal-700',
            Ginjal_kronis: 'bg-blue-100 text-blue-700',
            Kanker: 'bg-pink-100 text-pink-700',
            Kesehatan_mata: 'bg-indigo-100 text-indigo-700',
            Anti_peradangan: 'bg-red-100 text-red-700',
            Kesehatan_jantung: 'bg-purple-100 text-purple-700',
            Kesehatan_otak: 'bg-sky-100 text-sky-700',
            Kesehatan_kulit: 'bg-lime-100 text-lime-700',
            Dukungan_imunitas: 'bg-emerald-100 text-emerald-700',
            Peningkat_mood: 'bg-fuchsia-100 text-fuchsia-700',
            Pencegahan_kanker: 'bg-cyan-100 text-cyan-700',
            Kesehatan_pencernaan: 'bg-green-100 text-green-700',
            Kesehatan_tulang: 'bg-amber-100 text-amber-700',
            Diabetes: 'bg-red-200 text-red-800',

            // Diet
            Paleo: 'bg-green-100 text-green-700',
            Vegan: 'bg-emerald-100 text-emerald-700',
            'The Dukan': 'bg-indigo-100 text-indigo-700',
            'The Ultra Low Fat': 'bg-yellow-100 text-yellow-700',
            Keto: 'bg-pink-100 text-pink-700',
            Mediterrania: 'bg-orange-100 text-orange-700',
            'Intermittent fasting': 'bg-purple-100 text-purple-700',

            // Allergy
            'Alergi susu': 'bg-cyan-100 text-cyan-700',
            'Alergi telur': 'bg-rose-100 text-rose-700',
            'Alergi kacang': 'bg-teal-100 text-teal-700',
            'Alergi ikan': 'bg-sky-100 text-sky-700',
            'Alergi kerang': 'bg-blue-200 text-blue-800',
            'Alergi ayam': 'bg-yellow-200 text-yellow-800',
            'Alergi kuning telur': 'bg-lime-200 text-lime-800',
            'Alergi gandum': 'bg-gray-200 text-gray-800',

            // Nutrition
            'Tinggi Protein': 'bg-indigo-100 text-indigo-700',
            'Tinggi Serat': 'bg-amber-100 text-amber-700',
            'Rendah Natrium': 'bg-lime-100 text-lime-700',
            'Rendah Karbohidrat': 'bg-blue-100 text-blue-700',
            'Rendah Gula': 'bg-rose-100 text-rose-700',
            'Tinggi Kalsium': 'bg-purple-100 text-purple-700',
            'Rendah Lemak': 'bg-orange-100 text-orange-700',
        };

        return `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
            colorMap[val] || 'bg-gray-200 text-gray-800'
        }`;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="mb-1 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex min-h-[40px] w-full cursor-pointer flex-wrap gap-2 rounded-md border border-gray-700 bg-white px-3 py-2 text-sm shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
                tabIndex={0}
            >
                {selectedValues.length > 0 ? (
                    selectedValues.map((val) => (
                        <span
                            key={val}
                            className={getColorClasses(val)}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {formatLabel(val)}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeOption(val);
                                }}
                                className="ml-1 text-xs hover:text-red-500"
                            >
                                &times;
                            </button>
                        </span>
                    ))
                ) : (
                    <span className="text-gray-800">{`Pilih ${label}`}</span>
                )}
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-white shadow-md">
                    {options.map((option) => (
                        <label
                            key={option}
                            className="flex items-center px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={selectedValues.includes(option)}
                                onChange={() => toggleOption(option)}
                            />
                            {formatLabel(option)}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
