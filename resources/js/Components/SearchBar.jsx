import { useState } from 'react';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex h-10 items-center">
            {/* 🔥 Tambahkan tombol pencarian untuk mobile */}
            <button
                type="button"
                onClick={toggleSearch}
                className="block p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
            >
                <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </button>

            {/* 🔥 Kotak pencarian muncul jika tombol ditekan */}
            <div
                className={`${isOpen ? 'block' : 'hidden'} relative ml-2 w-64 md:block`}
            >
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="search-navbar"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Cari..."
                />
            </div>
        </div>
    );
};

export default SearchBar;
