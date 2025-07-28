import { useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function ArticleGeneralInfoCard({ data, setData, errors, categories = [] }) {
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData(name, files ? files[0] : value);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">Informasi Umum</h2>

            <div className="space-y-4">
                <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400">
                    <FiUploadCloud className="text-4xl text-gray-400" />
                    <div className="text-sm font-medium text-gray-700">Pilih Gambar Artikel</div>
                    <p className="text-xs text-gray-500">PNG atau JPEG, maksimal 10MB</p>
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="rounded-md bg-purple-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-purple-700"
                    >
                        Cari File
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
                {errors.image && <p className="text-sm text-red-600">{errors.image}</p>}

                {/* Judul Artikel */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Judul Artikel
                    </label>
                    <input
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="Masukkan judul artikel"
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    />
                    {errors.title && <p className="text-sm text-red-600">{errors.title}</p>}
                </div>

                {/* Deskripsi Singkat */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Deskripsi Singkat
                    </label>
                    <textarea
                        name="short_description"
                        value={data.short_description}
                        onChange={handleChange}
                        placeholder="Masukkan deskripsi singkat artikel"
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                        rows={4}
                    />
                    {errors.short_description && (
                        <p className="text-sm text-red-600">{errors.short_description}</p>
                    )}
                </div>

                {/* Kategori */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Kategori Artikel
                    </label>
                    <select
                        name="category_id"
                        value={data.category_id}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    >
                        <option value="">Pilih Kategori</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && (
                        <p className="text-sm text-red-600">{errors.category_id}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
