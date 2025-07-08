import getAllRecipesAdmin from '@/data/getAllRecipesAdmin';
import { useEffect, useState } from 'react';

export default function RecipeForm({ mode = 'create', slug, data = {} }) {
    const [judul, setJudul] = useState(mode === 'edit' ? data.judul : '');
    const [gambar, setGambar] = useState(mode === 'edit' ? data.gambar : '');
    const [dish, setDish] = useState(mode === 'edit' ? data.dish : '');
    const [kondisi, setKondisi] = useState(mode === 'edit' ? data.kondisi : '');
    const [diet, setDiet] = useState(mode === 'edit' ? data.diet : '');
    const [alergi, setAlergi] = useState(mode === 'edit' ? data.alergi : '');
    const [nutrisi, setNutrisi] = useState(mode === 'edit' ? data.nutrisi : '');
    const [metode, setMetode] = useState(mode === 'edit' ? data.metode : '');

    // Ambil data resep jika mode edit
    useEffect(() => {
        if (mode === 'edit' && slug) {
            const recipe = getAllRecipesAdmin().find(
                (item) => item.slug === slug,
            );
            if (recipe) {
                setFormData({
                    judul: recipe.judul || '',
                    gambar: recipe.gambar || '',
                    dish: recipe.dish || '',
                    kondisi: recipe.kondisi || '',
                    diet: recipe.diet || '',
                    alergi: recipe.alergi || '',
                    nutrisi: Array.isArray(recipe.nutrisi)
                        ? recipe.nutrisi.join(', ')
                        : recipe.nutrisi || '',
                    metode: recipe.metode || '',
                });
            }
        }
    }, [mode, slug]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            judul,
            gambar,
            dish,
            kondisi,
            diet,
            alergi,
            nutrisi,
            metode,
        };
        console.log('Data yang akan diupdate:', updatedData);
    };

    return (
        <form id="recipe-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Judul Resep</label>
                <input
                    type="text"
                    name="judul"
                    value={formData.judul}
                    onChange={handleChange}
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">URL Gambar</label>
                <input
                    type="text"
                    name="gambar"
                    value={formData.gambar}
                    onChange={handleChange}
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Hidangan</label>
                <input
                    type="text"
                    name="dish"
                    value={formData.dish}
                    onChange={handleChange}
                    placeholder="Contoh: Sarapan, Makanan Utama"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70B9BE]"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium">
                        Kondisi Kesehatan
                    </label>
                    <input
                        type="text"
                        name="kondisi"
                        value={formData.kondisi}
                        onChange={handleChange}
                        placeholder="Contoh: Diabetes, Jantung"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Diet</label>
                    <input
                        type="text"
                        name="diet"
                        value={formData.diet}
                        onChange={handleChange}
                        placeholder="Contoh: Vegan, Gluten Free"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium">Alergi</label>
                    <input
                        type="text"
                        name="alergi"
                        value={formData.alergi}
                        onChange={handleChange}
                        placeholder="Contoh: Kacang, Gluten"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Nutrisi</label>
                    <input
                        type="text"
                        name="nutrisi"
                        value={formData.nutrisi}
                        onChange={handleChange}
                        placeholder="Contoh: High Fiber, Low Sugar"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium">
                    Metode Memasak
                </label>
                <input
                    type="text"
                    name="metode"
                    value={formData.metode}
                    onChange={handleChange}
                    placeholder="Contoh: Kukus, Panggang"
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                />
            </div>
        </form>
    );
}
