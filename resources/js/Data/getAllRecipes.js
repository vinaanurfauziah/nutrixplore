import kategoriData from '@/data/kategoriData';
import resepData from '@/data/resepData';

export default function getAllRecipes() {
    const allRecipes = [];

    Object.entries(resepData).forEach(([kategoriSlug, subkategoris]) => {
        Object.entries(subkategoris).forEach(([subkategoriSlug, resepList]) => {
            resepList.forEach((resep) => {
                allRecipes.push({
                    ...resep,
                    kategori: kategoriSlug,
                    subkategori: subkategoriSlug,
                    labelSubkategori:
                        kategoriData?.[kategoriSlug]?.subkategori.find(
                            (item) => item.slug === subkategoriSlug
                        )?.nama || subkategoriSlug,
                });
            });
        });
    });

    return allRecipes;
}
