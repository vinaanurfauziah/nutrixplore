import { useRef, useState, useEffect } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function ArticleGeneralInfoCard({ data, setData, errors, categories = [] }) {
    const fileInputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            setData(name, files[0]);
            setPreviewUrl(URL.createObjectURL(files[0]));
        } else {
            setData(name, value);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        // Jika sedang edit dan gambar sebelumnya adalah string (dari server)
        if (data.image && typeof data.image === 'string') {
            setPreviewUrl(`/storage/${data.image}`);
        }

        // Cleanup URL object jika upload file baru
        return () => {
            if (previewUrl && typeof previewUrl !== 'string') {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [data.image]);

    return (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">Informasi Umum</h2>

            <div className="space-y-4">
                {/* Upload Gambar + Preview */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400">
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="mb-4 h-40 w-auto rounded-md object-cover"
                        />
                    )}
                    <FiUploadCloud className="text-4xl text-gray-400" />
                    <div className="text-sm font-medium text-gray-700">Pilih Gambar Artikel</div>
                    <p className="text-xs text-gray-500">PNG atau JPEG, maksimal 10MB</p>
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="rounded-md bg-[#70B9BE] px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-500"
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

                {/* Slug Artikel */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Slug Artikel
                    </label>
                    <input
                        name="slug"
                        value={data.slug}
                        onChange={handleChange}
                        placeholder="Masukkan slug artikel"
                        className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                    />
                    {errors.slug && <p className="text-sm text-red-600">{errors.slug}</p>}
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

                {/* Kategori Artikel */}
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
