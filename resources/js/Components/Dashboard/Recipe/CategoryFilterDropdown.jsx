
import { useEffect, useRef, useState } from 'react';

export default function CategoryFilterDropdown({ filterDish, setFilterDish }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
                setSelectedMainCategory(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMainCategoryClick = (slug) => {
        setSelectedMainCategory(slug);
    };

    const handleSubCategoryClick = (subNama) => {
        setFilterDish(subNama);
        setIsDropdownOpen(false);
        setSelectedMainCategory(null);
    };

    useEffect(() => {
        for (const [slug, kategori] of Object.entries(kategoriData)) {
            if (kategori.subkategori?.some((sub) => sub.nama === filterDish)) {
                setSelectedMainCategory(slug);
                return;
            }
        }
        setSelectedMainCategory(null);
    }, [filterDish]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm"
            >
                {filterDish === 'All' ? 'Semua Kategori' : filterDish}
            </button>

            {isDropdownOpen && (
                <div className="absolute left-0 top-full z-20 mt-2 flex w-max rounded-lg border bg-white shadow-md">
                    {/* Kategori Utama */}
                    <div className="flex max-h-[300px] flex-col overflow-y-auto border-r bg-white">
                        {Object.entries(kategoriData).map(
                            ([slug, kategori]) => {
                                const isActiveMain = kategori.subkategori?.some(
                                    (sub) => sub.nama === filterDish,
                                );

                                return (
                                    <div
                                        key={slug}
                                        className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${
                                            selectedMainCategory === slug ||
                                            isActiveMain
                                                ? 'bg-gray-100 font-semibold'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMainCategoryClick(slug)
                                        }
                                    >
                                        {kategori.nama}
                                    </div>
                                );
                            },
                        )}
                    </div>

                    {/* Subkategori */}
                    {selectedMainCategory &&
                        kategoriData[selectedMainCategory]?.subkategori
                            ?.length > 0 && (
                            <div className="flex max-h-[300px] min-w-[180px] flex-col overflow-y-auto bg-white">
                                {/* ✅ Tombol Reset */}
                                <div
                                    className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${
                                        filterDish === 'All'
                                            ? 'bg-gray-100 font-semibold'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setFilterDish('All');
                                        setIsDropdownOpen(false);
                                        setSelectedMainCategory(null);
                                    }}
                                >
                                    Semua Kategori
                                </div>

                                {kategoriData[
                                    selectedMainCategory
                                ].subkategori.map((sub) => (
                                    <div
                                        key={sub.slug}
                                        className={`cursor-pointer px-4 py-2 text-sm hover:bg-[#70B9BE] hover:text-white ${
                                            filterDish === sub.nama
                                                ? 'bg-[#70B9BE] font-semibold text-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSubCategoryClick(sub.nama)
                                        }
                                    >
                                        {sub.nama}
                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            )}
        </div>
    );
}
