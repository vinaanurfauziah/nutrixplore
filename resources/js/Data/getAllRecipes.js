import kategoriData from '@/data/kategoriData';
import  resepData from '@/data/resepData'; // Adjust the import path as necessary

function formatLabel(slug) {
    return slug
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function getAllRecipes() {
    const allRecipes = [];

    Object.entries(resepData).forEach(([kategoriSlug, subkategoris]) => {
        Object.entries(subkategoris).forEach(([subkategoriSlug, resepList]) => {
            resepList.forEach((resep) => {
                const labelSub =
                    kategoriData?.[kategoriSlug]?.subkategori.find(
                        (item) => item.slug === subkategoriSlug,
                    )?.nama || formatLabel(subkategoriSlug);

                const labelKategori =
                    kategoriData?.[kategoriSlug]?.nama ||
                    formatLabel(kategoriSlug);

                const existing = allRecipes.find((r) => r.slug === resep.slug);

                const newLabels = [labelSub, labelKategori];

                if (existing) {
                    newLabels.forEach((label) => {
                        if (!existing.labels.includes(label)) {
                            existing.labels.push(label);
                        }
                    });
                } else {
                    allRecipes.push({
                        ...resep,
                        kategori: kategoriSlug,
                        subkategori: subkategoriSlug,
                        labelKategori,
                        labels: newLabels,
                    });
                }
            });
        });
    });

    return allRecipes;
}
