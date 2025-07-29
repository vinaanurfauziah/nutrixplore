import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Templates/Navbar';
import Footer from '@/Components/Templates/Footer';
import RecipeCard from '@/Components/Public/RecipeCard';
import CategoryCard from '@/Components/Public/CategoryCard';
import kategoriData from '@/data/kategoriData';

// Import ikon dari beberapa paket icon
import * as LuIcons from 'react-icons/lu';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as TbIcons from 'react-icons/tb';

export default function Category({ auth, recipes = [], subcategories = [], kategoriSlug }) {
    
    const Icons = {
    ...LuIcons,
    ...BiIcons,
    ...BsIcons,
    ...CgIcons,
    ...FaIcons,
    ...TbIcons,
};

    
    const onSave = (id) => {
        console.log('Saved recipe ID:', id);
    };

    const onUnsave = (id) => {
        console.log('Unsaved recipe ID:', id);
    };

    const kategori = kategoriData[kategoriSlug];

    console.log('kategoriSlug:', kategoriSlug);
    console.log('kategoriData:', kategori);
    console.log('subcategories from backend:', subcategories);

    return (
        <>
            <Head title="Kategori Resep" />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />

                <main className="flex-grow bg-white dark:bg-gray-900">
                    <section className="mx-auto max-w-screen-2xl px-4 py-8">
                        <h1 className="mb-4 text-2xl font-bold">Kategori Resep</h1>

                        {!kategori && (
                            <div className="text-red-500 mb-4">
                                Data kategori tidak ditemukan untuk slug: <strong>{kategoriSlug}</strong>
                            </div>
                        )}

                        {kategori && subcategories.length > 0 && (
                            <>
                             
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                                    {subcategories.map((item, i) => {
                                        console.log('🔍 Mencocokkan item:', item.name);

                                        const matchedSub = kategori.subkategori.find(
                                            (sub) =>
                                                sub.nama?.toLowerCase() === item.name?.toLowerCase()
                                        );

                                        console.log('🎯 matchedSub:', matchedSub);

                                        const iconName = matchedSub?.icon;
                                        const IconComponent = iconName && Icons[iconName];

                                        return (
                                            <CategoryCard
                                                key={i}
                                                text={item.name}
                                                href={`/recipe/${kategoriSlug}/${item.name}`}
                                                icon={IconComponent ? <IconComponent size={24} /> : null}
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        <h2 className="text-lg font-semibold mb-2">Resep dalam Kategori Ini:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {recipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.id}
                                    title={recipe.judul}
                                    imageUrl={recipe.gambar}
                                    link={`/recipe/${recipe.slug}`}
                                    kalori={recipe.kalori}
                                    durasi={recipe.durasi}
                                    auth={auth}
                                    onSave={() => onSave(recipe.id)}
                                    onUnsave={() => onUnsave(recipe.id)}
                                />
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
