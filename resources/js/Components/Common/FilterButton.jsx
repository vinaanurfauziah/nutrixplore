import { useEffect, useRef, useState } from 'react';

const FilterButton = ({ text, options, selectedOptions = [], onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option) => {
        onChange(option);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative p-1" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={`inline-flex items-center rounded-lg border px-3 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4 ${
                    isOpen
                        ? 'bg-[#70B9BE] text-white hover:bg-[#70B9BE] focus:ring-[#70B9BE]'
                        : 'hover:bg-primary-800 focus:ring-primary-300 bg-[#F4F4F4] text-gray-900'
                } dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                type="button"
            >
                {text}
                <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-10 w-56 rounded-lg bg-white p-3 shadow dark:bg-gray-700">
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        {text}
                    </h6>
                    <ul className="max-h-64 overflow-y-auto space-y-2 text-sm">
                        {options.map((option) => {
                            const id = `${text}-${option}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
                            return (
                                <li key={option} className="flex items-center gap-2 py-1">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#70B9BE] focus:ring-2 focus:ring-[#70B9BE] dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-[#70B9BE]"
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleCheckboxChange(option)}
                                    />
                                    <label
                                        htmlFor={id}
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        {option}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterButton;
