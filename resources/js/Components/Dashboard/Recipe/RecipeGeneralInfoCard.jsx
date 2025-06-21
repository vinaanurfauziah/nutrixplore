import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function RecipeGeneralInfoCard({ defaultData = null }) {
    const [form, setForm] = useState({
        name: '',
        image: null,
        prepTime: '',
        cookTime: '',
        servings: '',
        dish: '',
        diet: '',
        allergy: '',
        nutrition: '',
        method: '',
    });

    useEffect(() => {
        if (defaultData) {
            setForm((prev) => ({
                ...prev,
                ...defaultData,
            }));
        }
    }, [defaultData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
                Informasi Umum
            </h2>

            <div className="space-y-5">
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400">
                    <FiUploadCloud className="text-4xl text-gray-400" />
                    <div className="text-sm font-medium text-gray-700">
                        Upload Foto
                    </div>
                    <p className="text-xs text-gray-500">
                        PNG atau JPEG, maksimal 10MB
                    </p>
                    <button
                        type="button"
                        className="rounded-md bg-purple-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-purple-700"
                    >
                        Cari File
                    </button>
                    <input
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        className="hidden"
                    />
                </label>

                {[
                    {
                        label: 'Nama Resep',
                        name: 'name',
                        placeholder: 'Nama Resep',
                    },
                    {
                        label: 'Durasi Persiapan (menit)',
                        name: 'prepTime',
                        placeholder: 'Durasi Persiapan',
                        unit: 'menit',
                    },
                    {
                        label: 'Durasi Memasak (menit)',
                        name: 'cookTime',
                        placeholder: 'Durasi Memasak',
                        unit: 'menit',
                    },
                    {
                        label: 'Jumlah Porsi',
                        name: 'servings',
                        placeholder: 'Jumlah Porsi',
                        unit: 'porsi',
                    },
                ].map(({ label, name, placeholder, unit }) => (
                    <div key={name} className="relative">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            {label}
                        </label>
                        <input
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className="w-full rounded-md border px-3 py-2 pr-16 text-sm shadow-sm"
                        />
                        {unit && (
                            <span className="absolute right-4 top-9 text-sm text-gray-500">
                                {unit}
                            </span>
                        )}
                    </div>
                ))}

                {[
                    {
                        label: 'Kategori Hidangan',
                        name: 'dish',
                        options: ['', 'utama', 'pembuka', 'penutup', 'cemilan'],
                    },
                    {
                        label: 'Kategori Diet',
                        name: 'diet',
                        options: [
                            '',
                            'vegan',
                            'vegetarian',
                            'rendah-karbo',
                            'tinggi-protein',
                        ],
                    },
                    {
                        label: 'Kategori Alergi',
                        name: 'allergy',
                        options: [
                            '',
                            'gluten',
                            'susu',
                            'kacang',
                            'telur',
                            'makanan laut',
                        ],
                    },
                    {
                        label: 'Kategori Nutrisi',
                        name: 'nutrition',
                        options: [
                            '',
                            'rendah-kalori',
                            'tinggi-serat',
                            'tinggi-protein',
                        ],
                    },
                    {
                        label: 'Metode Memasak',
                        name: 'method',
                        options: ['', 'rebus', 'panggang', 'goreng', 'kukus'],
                    },
                ].map(({ label, name, options }) => (
                    <div key={name}>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            {label}
                        </label>
                        <select
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option === ''
                                        ? `Pilih ${label}`
                                        : option.charAt(0).toUpperCase() +
                                          option.slice(1).replace('-', ' ')}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}
