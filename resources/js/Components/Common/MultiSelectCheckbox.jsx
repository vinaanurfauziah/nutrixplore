import { useEffect, useRef, useState } from 'react';

export default function MultiSelectCheckbox({
    label,
    name,
    options = [],
    selectedValues = [],
    onChange = () => {},
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isObject = (val) => typeof val === 'object' && val !== null;

    const getValue = (val) => isObject(val) ? val.id : val;
    const getLabel = (val) => isObject(val) ? val.name : val;

const toggleOption = (value) => {
  const alreadySelected = selectedValues.some(
    (item) => getValue(item) === getValue(value)
  );

  const updatedObjects = alreadySelected
    ? selectedValues.filter((item) => getValue(item) !== getValue(value))
    : [...selectedValues, value];

  const updatedIds = updatedObjects.map(getValue);
  onChange(updatedIds);
};

    const removeOption = (value) => {
        const updatedValues = selectedValues.filter(
            (item) => getValue(item) !== getValue(value)
        );
        onChange(name, updatedValues);
    };

    const getColorClasses = () =>
        "inline-flex items-center rounded bg-purple-100 px-2 py-1 text-sm text-purple-700";

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
                    selectedValues.map((val, idx) => (
                        <span
                            key={`selected-${getValue(val)}-${idx}`}
                            className={getColorClasses()}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {getLabel(val)}
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
                    <span className="text-gray-800">Pilih {label}</span>
                )}
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-white shadow-md">
                    {options.map((option, idx) => {
                        const isChecked = selectedValues.some(
                            (item) => getValue(item) === getValue(option)
                        );
                        return (
                            <label
                                key={`option-${getValue(option)}`}
                                className="flex items-center px-3 py-2 text-sm hover:bg-gray-100"
                            >
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={isChecked}
                                    onChange={() => toggleOption(option)}
                                />
                                {getLabel(option)}
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
