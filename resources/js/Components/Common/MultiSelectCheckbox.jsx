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
            diabetes: 'bg-red-100 text-red-700',
            hipertensi: 'bg-yellow-100 text-yellow-700',
            stroke: 'bg-orange-100 text-orange-700',
            jantung: 'bg-pink-100 text-pink-700',
            vegan: 'bg-green-100 text-green-700',
            vegetarian: 'bg-emerald-100 text-emerald-700',
            'rendah-karbo': 'bg-blue-100 text-blue-700',
            'tinggi-protein': 'bg-indigo-100 text-indigo-700',
            gluten: 'bg-purple-100 text-purple-700',
            susu: 'bg-cyan-100 text-cyan-700',
            kacang: 'bg-teal-100 text-teal-700',
            telur: 'bg-rose-100 text-rose-700',
            'makanan laut': 'bg-sky-100 text-sky-700',
            'rendah-kalori': 'bg-lime-100 text-lime-700',
            'tinggi-serat': 'bg-amber-100 text-amber-700',
            default: 'bg-gray-200 text-gray-800',
        };

        return `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
            colorMap[val] || colorMap.default
        }`;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="mb-1 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex min-h-[40px] w-full cursor-pointer flex-wrap gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
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
                    <span className="text-gray-400">{`Pilih ${label}`}</span>
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
