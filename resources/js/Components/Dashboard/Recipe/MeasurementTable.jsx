// resources/js/Components/Dashboard/Recipe/MeasurementTable.jsx
import { router } from '@inertiajs/react';
import { useState } from 'react';
import MeasurementRow from './MeasurementRow';

export default function MeasurementTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null); // <== Kontrol menu terbuka

    const units = [
        { name: 'Gram', symbol: 'g', type: 'Berat' },
        { name: 'Kilogram', symbol: 'kg', type: 'Berat' },
        { name: 'Ons', symbol: 'ons', type: 'Berat' },
        { name: 'Sendok Makan', symbol: 'sdm', type: 'Volume' },
        { name: 'Sendok Teh', symbol: 'sdt', type: 'Volume' },
        { name: 'Mililiter', symbol: 'ml', type: 'Volume' },
        { name: 'Liter', symbol: 'l', type: 'Volume' },
    ];

    const filteredUnits = units.filter((unit) =>
        unit.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            {/* Header dan Filter */}
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
                {/* <h2 className="text-lg font-semibold text-[#333]">
                    Satuan Takaran
                </h2> */}

                <div className="mt-3 flex flex-wrap items-center gap-2 md:ml-auto md:mt-0">
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
                                route(
                                    'dashboard.recipe.measurement-units.create',
                                ),
                            )
                        }
                        className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        + Tambah Satuan
                    </button>
                </div>
            </div>

            {/* Tabel Satuan Takaran */}
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
