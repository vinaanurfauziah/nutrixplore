// resources/js/Components/Dashboard/Article/ArticleGeneralInfoCard.jsx
import { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function ArticleGeneralInfoCard() {
    const [form, setForm] = useState({
        image: null,
        name: '',
        description: '',
        category: '',
    });

    const categories = [
        'Kondisi Kesehatan',
        'Nutrisi & Pola Makan',
        'Gaya Hidup Sehat',
        'Bahan Makanan',
        'Tips Masak Sehat',
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    return (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
                Informasi Umum
            </h2>

            <div className="space-y-4">
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400">
                    <FiUploadCloud className="text-4xl text-gray-400" />
                    <div className="text-sm font-medium text-gray-700">
                        Pilih Gambar Artikel
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

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Judul Artikel
                    </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Masukkan judul artikel"
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Deskripsi Singkat
                    </label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Masukkan deskripsi singkat artikel"
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                        rows={4}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Kategori Artikel
                    </label>
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        <option value="">Pilih Kategori</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Kategori Resep Terkait
                    </label>
                    <select
                        name="recipeCategory"
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        <option value="">Pilih Kategori Resep</option>
                        <option value="Diabetes">
                            Kondisi Kesehatan - Diabetes
                        </option>
                        <option value="Hipertensi">
                            Kondisi Kesehatan - Hipertensi
                        </option>
                        <option value="Rendah-Kalori">
                            Nutrisi - Rendah Kalori
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}
