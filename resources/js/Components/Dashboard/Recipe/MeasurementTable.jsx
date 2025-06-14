// resources/js/Components/Dashboard/Recipe/MeasurementTable.jsx
import { useState } from 'react';
import MeasurementRow from './MeasurementRow';

export default function MeasurementTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openRowIndex, setOpenRowIndex] = useState(null); // <== Tambahkan ini

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
            {/* ... input dan tombol tambah tetap ... */}
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
                                        setOpenRowIndex(openRowIndex === index ? null : index)
                                    }
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
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
