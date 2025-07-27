import kategoriData from '@/data/kategoriData';
import resepData from '@/data/resepData';   

function formatLabel(slug) {
    return slug
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function getAllRecipesAdmin() {
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

                    if (kategoriSlug === 'hidangan') existing.dish = labelSub;
                    if (kategoriSlug === 'kondisi') existing.kondisi = labelSub;
                    if (kategoriSlug === 'diet') existing.diet = labelSub;
                    if (kategoriSlug === 'alergi') existing.alergi = labelSub;
                    if (kategoriSlug === 'nutrisi') existing.nutrisi = labelSub;
                    if (kategoriSlug === 'metode') existing.metode = labelSub;
                } else {
                    allRecipes.push({
                        ...resep,
                        kategori: kategoriSlug,
                        subkategori: subkategoriSlug,
                        labelKategori,
                        labels: newLabels,
                        dish:
                            kategoriSlug === 'hidangan' ? labelSub : undefined,
                        kondisi:
                            kategoriSlug === 'kondisi' ? labelSub : undefined,
                        diet: kategoriSlug === 'diet' ? labelSub : undefined,
                        alergi:
                            kategoriSlug === 'alergi' ? labelSub : undefined,
                        nutrisi:
                            kategoriSlug === 'nutrisi' ? labelSub : undefined,
                        metode:
                            kategoriSlug === 'metode' ? labelSub : undefined,
                    });
                }
            });
        });
    });

    return allRecipes;
}
