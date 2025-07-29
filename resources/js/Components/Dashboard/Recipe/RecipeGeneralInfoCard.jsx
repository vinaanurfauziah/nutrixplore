import MultiSelectCheckbox from '@/Components/Common/MultiSelectCheckbox';
import { useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function RecipeGeneralInfoCard({
    data = {},
    setData,
    errors,
    submitted = false,
    healthTags = [],
    allergyTags = [],
    nutritionTags = [],
    dietTags = [],
}) {
    const inputRef = useRef();

    const mapToOption = (tag, fallbackId = 0) => ({
        id: tag.id ?? tag.value ?? fallbackId,
        name: tag.name ?? tag.label ?? 'Tanpa Nama',
    });

    const healthOptions = healthTags.map((tag, i) => mapToOption(tag, i + 1));
    const allergyOptions = allergyTags.map((tag, i) => mapToOption(tag, i + 1));
    const nutritionOptions = nutritionTags.map((tag, i) =>
        mapToOption(tag, i + 1),
    );
    const dietOptions = dietTags.map((tag, i) => mapToOption(tag, i + 1));

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleChange = (e) => {
        const { name, value, files, multiple, selectedOptions } = e.target;

        if (files && files.length > 0) {
            setData(name, files[0]);
        } else if (multiple) {
            const values = Array.from(
                selectedOptions,
                (option) => option.value,
            );
            setData(name, values);
        } else {
            setData(name, value);
        }
    };
    const handleTagChange = (tagField, options) => (selectedIds) => {
        setData((prev) => ({
            ...prev,
            [tagField]: selectedIds,
        }));
    };

    // Helper: cari full object dari array options berdasarkan ID
    const getSelectedObjects = (ids, options) =>
        options.filter((option) => ids.includes(option.id));
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
                        onClick={handleClick}
                        className="rounded-md bg-[#70B9BE] px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-400"
                    >
                        Cari File
                    </button>

                    <input
                        type="file"
                        name="gambar"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        ref={inputRef}
                        className="hidden"
                    />
                </label>

                {data?.gambar && (
                    <img
                        src={
                            typeof data.gambar === 'string'
                                ? data.gambar
                                : URL.createObjectURL(data.gambar)
                        }
                        alt="Preview Gambar"
                        className="mt-4 h-40 rounded-lg object-cover"
                    />
                )}

                {/* Validasi jika gambar kosong dan sudah disubmit */}
                {submitted && !data.gambar && (
                    <p className="mt-1 text-sm text-red-500">
                        Gambar wajib diunggah.
                    </p>
                )}

                {/* Error dari Laravel */}
                {errors.gambar && (
                    <p className="mt-1 text-sm text-red-500">{errors.gambar}</p>
                )}

                {/* Input Teks */}
                {[
                    {
                        label: 'Judul Resep',
                        name: 'judul',
                        placeholder: 'Judul Resep',
                    },
                    { label: 'Slug', name: 'slug', placeholder: 'Slug' },
                    {
                        label: 'Total Kalori',
                        name: 'kalori',
                        placeholder: 'Total Kalori',
                        unit: 'kkal',
                    },
                    {
                        label: 'Durasi Memasak',
                        name: 'durasi',
                        placeholder: 'Durasi',
                        unit: 'menit',
                    },
                    {
                        label: 'Jumlah Porsi',
                        name: 'cook',
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
                            value={data[name] ?? ''}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className="w-full rounded-md border px-3 py-2 pr-16 text-sm shadow-sm"
                        />
                        {unit && (
                            <span className="absolute right-4 top-9 text-sm text-gray-700">
                                {unit}
                            </span>
                        )}
                        {errors[name] && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors[name]}
                            </div>
                        )}
                    </div>
                ))}

                {/* Select: Kategori Hidangan */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Kategori Hidangan
                    </label>
                    <select
                        name="kategori_hidangan"
                        value={data.kategori_hidangan ?? ''}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        {[
                            '',
                            'Hidangan Pembuka',
                            'Sarapan',
                            'Hidangan Utama',
                            'Hidangan Penutup',
                            'Minuman',
                            'Pelengkap',
                            'Cemilan',
                            'Hidangan Berkuah',
                        ].map((option) => (
                            <option key={option} value={option}>
                                {option === ''
                                    ? 'Pilih Kategori Hidangan'
                                    : option}
                            </option>
                        ))}
                    </select>
                    {errors.kategori_hidangan && (
                        <div className="mt-1 text-sm text-red-500">
                            {errors.kategori_hidangan}
                        </div>
                    )}
                </div>

                {/* Select: Metode Memasak */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Metode Memasak
                    </label>
                    <select
                        name="metode_memasak"
                        value={data.metode_memasak ?? ''}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        {[
                            '',
                            'Merebus',
                            'Menggoreng',
                            'Mengukus',
                            'Memanggang',
                            'Menumis',
                            'Merebus Perlahan',
                            'Menggulai (Stewing)',
                            'Menggoreng Cepat(Stir Frying)',
                        ].map((option) => (
                            <option key={option} value={option}>
                                {option === ''
                                    ? 'Pilih Metode Memasak'
                                    : option}
                            </option>
                        ))}
                    </select>
                    {errors.metode_memasak && (
                        <div className="mt-1 text-sm text-red-500">
                            {errors.metode_memasak}
                        </div>
                    )}
                </div>

                <MultiSelectCheckbox
                    label="Kategori Kesehatan"
                    name="health_tags"
                    options={healthOptions}
                    selectedValues={getSelectedObjects(
                        data.health_tags || [],
                        healthOptions,
                    )}
                    onChange={handleTagChange('health_tags', healthOptions)}
                />

                <MultiSelectCheckbox
                    label="Kategori Alergi"
                    name="allergy_tags"
                    options={allergyOptions}
                    selectedValues={getSelectedObjects(
                        data.allergy_tags || [],
                        allergyOptions,
                    )}
                    onChange={handleTagChange('allergy_tags', allergyOptions)}
                />

                <MultiSelectCheckbox
                    label="Kategori Nutrisi"
                    name="nutrition_tags"
                    options={nutritionOptions}
                    selectedValues={getSelectedObjects(
                        data.nutrition_tags || [],
                        nutritionOptions,
                    )}
                    onChange={handleTagChange(
                        'nutrition_tags',
                        nutritionOptions,
                    )}
                />

                <MultiSelectCheckbox
                    label="Kategori Diet"
                    name="diet_tags"
                    options={dietOptions}
                    selectedValues={getSelectedObjects(
                        data.diet_tags || [],
                        dietOptions,
                    )}
                    onChange={handleTagChange('diet_tags', dietOptions)}
                />
            </div>
        </div>
    );
}
