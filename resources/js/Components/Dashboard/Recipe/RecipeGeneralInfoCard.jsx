import MultiSelectCheckbox from '@/Components/Common/MultiSelectCheckbox';
import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function RecipeGeneralInfoCard({ defaultData = null }) {
    const [form, setForm] = useState({
        name: '',
        image: null,
        prepTime: '',
        cookTime: '',
        servings: '',
        health: [],
        dish: '',
        diet: [],
        allergy: [],
        nutrition: [],
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
        const { name, value, files, multiple, selectedOptions } = e.target;

        if (files) {
            setForm({ ...form, [name]: files[0] });
        } else if (multiple) {
            const values = Array.from(
                selectedOptions,
                (option) => option.value,
            );
            setForm({ ...form, [name]: values });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleMultiSelectChange = (name, values) => {
        setForm({ ...form, [name]: values });
    };

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
                Informasi Umum
            </h2>

            <div className="space-y-5">
                {/* Upload Foto */}
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

                {/* Input Teks */}
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
                            <span className="absolute right-4 top-9 text-sm text-gray-700">
                                {unit}
                            </span>
                        )}
                    </div>
                ))}

                {/* Multi-select */}
                <MultiSelectCheckbox
                    label="Kategori Kondisi Kesehatan"
                    name="health"
                    options={[
                        'Stroke',
                        'Obesitas',
                        'Hipertensi',
                        'Paru_kronis',
                        'Ginjal_kronis',
                        'Kanker',
                        'Kesehatan_mata',
                        'Anti_peradangan',
                        'Kesehatan_jantung',
                        'Kesehatan_otak',
                        'Kesehatan_kulit',
                        'Dukungan_imunitas',
                        'Peningkat_mood',
                        'Pencegahan_kanker',
                        'Kesehatan_pencernaan',
                        'Kesehatan_tulang',
                        'Diabetes',
                    ]}
                    selectedValues={form.health}
                    onChange={handleMultiSelectChange}
                />

                {/* Select biasa */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Kategori Hidangan
                    </label>
                    <select
                        name="dish"
                        value={form.dish}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        {[
                            '',
                            'Sarapan',
                            'Pembuka',
                            'Utama',
                            'Penutup',
                            'Pelengkap',
                            'Cemilan',
                            'Berkuah',
                            'Minuman',
                        ].map((option) => (
                            <option key={option} value={option}>
                                {option === ''
                                    ? 'Pilih Kategori Hidangan'
                                    : option.charAt(0).toUpperCase() +
                                      option.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Multi-select */}
                <MultiSelectCheckbox
                    label="Kategori Diet"
                    name="diet"
                    options={[
                        'Paleo',
                        'Vegan',
                        'Rendah Karbohidrat',
                        'The Dukan',
                        'The Ultra Low Fat',
                        'Keto',
                        'Mediterrania',
                        'Intermittent fasting',
                    ]}
                    selectedValues={form.diet}
                    onChange={handleMultiSelectChange}
                />

                <MultiSelectCheckbox
                    label="Kategori Alergi"
                    name="allergy"
                    options={[
                        'Alergi susu',
                        'Alergi telur',
                        'Alergi kacang',
                        'Alergi ikan',
                        'Alergi kerang',
                        'Alergi ayam',
                        'Alergi kuning telur',
                        'Alergi gandum',
                    ]}
                    selectedValues={form.allergy}
                    onChange={handleMultiSelectChange}
                />

                <MultiSelectCheckbox
                    label="Kategori Nutrisi"
                    name="nutrition"
                    options={[
                        'Tinggi Protein',
                        'Tinggi Serat',
                        'Rendah Natrium',
                        'Rendah Karbohidrat',
                        'Rendah Gula',
                        'Tinggi Kalsium',
                        'Rendah Lemak',
                    ]}
                    selectedValues={form.nutrition}
                    onChange={handleMultiSelectChange}
                />

                {/* Select biasa */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Metode Memasak
                    </label>
                    <select
                        name="method"
                        value={form.method}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        {[
                            '',
                            'Rebus',
                            'Goreng',
                            'Kukus',
                            'Panggang',
                            'Tumis',
                        ].map((option) => (
                            <option key={option} value={option}>
                                {option === ''
                                    ? 'Pilih Metode Memasak'
                                    : option.charAt(0).toUpperCase() +
                                      option.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
