import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import MeasurementRow from './MeasurementRow';

export default function MeasurementTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const units = [
        { name: 'Gram', symbol: 'g', type: 'Berat' },
        { name: 'Kilogram', symbol: 'kg', type: 'Berat' },
        { name: 'Mililiter', symbol: 'ml', type: 'Volume' },
        { name: 'Liter', symbol: 'l', type: 'Volume' },
    ];

    const filteredUnits = units.filter((unit) =>
        unit.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            {/* Header Filter */}
            <div className="mb-4">
                {/* Desktop */}
                <div className="hidden flex-col gap-2 sm:flex-row sm:items-center md:flex">
                    <input
                        type="text"
                        placeholder="Cari satuan..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                    />

                    <button
                        onClick={() =>
                            router.get(
                                '/dashboard/recipe/measurement-units/create',
                            )
                        }
                        className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                    >
                        + Tambah Satuan
                    </button>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-[#70B9BE]"
                        title="Cari"
                    >
                        <FiSearch size={20} />
                    </button>
                    <button
                        onClick={() =>
                            router.get(
                                '/dashboard/recipe/measurement-units/create',
                            )
                        }
                        className="text-[#70B9BE]"
                        title="Tambah Satuan"
                    >
                        <FiPlus size={20} />
                    </button>
                </div>

                {/* Input Search Mobile */}
                {showSearch && (
                    <div className="mt-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Cari satuan..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                        />
                    </div>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left text-sm">
                    <thead className="border-b text-gray-600">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Nama</th>
                            <th className="px-4 py-3 font-semibold">Simbol</th>
                            <th className="px-4 py-3 font-semibold">Jenis</th>
                            <th className="px-4 py-3 font-semibold">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredUnits.length > 0 ? (
                            filteredUnits.map((unit, index) => (
                                <MeasurementRow
                                    key={index}
                                    index={index}
                                    name={unit.name}
                                    symbol={unit.symbol}
                                    type={unit.type}
                                    isOpen={openRowIndex === index}
                                    onToggle={() =>
                                        setOpenRowIndex(
                                            openRowIndex === index
                                                ? null
                                                : index,
                                        )
                                    }
                                />
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-4 py-4 text-center text-gray-500"
                                >
                                    Tidak ada satuan ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
