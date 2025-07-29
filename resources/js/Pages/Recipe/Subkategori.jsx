import Breadcrumb from '@/Components/Common/Breadcrumb';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import RecipeCard from '@/Components/Public/RecipeCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function SubKategori({ auth, kategoriSlug, subkategoriSlug, recipes }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Resep dibatalkan penyimpanannya');
    };

    return (
        <>
            <Head title={subkategoriSlug.replace(/-/g, ' ')} />
            <div className="relative flex min-h-screen flex-col">
                <Navbar auth={auth} />
                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        {
                            label: kategoriSlug,
                            href: `/recipe/${kategoriSlug}`,
                        },
                        {
                            label: subkategoriSlug.replace(/-/g, ' '),
                            href: `/recipe/${kategoriSlug}/${subkategoriSlug}`,
                        },
                    ]}
                />
                <main className="flex-grow bg-white dark:bg-gray-900">
                    <section className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                        <h3 className="mb-8 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                            {subkategoriSlug.replace(/-/g, ' ')}
                        </h3>

                        {recipes.length > 0 ? (
                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                {recipes.map((resep) => (
                                    <li key={resep.id}>
                                        <RecipeCard
                                            title={resep.judul}
                                            imageUrl={resep.gambar}
                                            link={`/recipe/${kategoriSlug}/${subkategoriSlug}/${resep.slug}`}
                                            kalori={resep.kalori}
                                            durasi={resep.durasi}
                                            onSave={handleSave}
                                            onUnsave={handleUnsave}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400">
                                Belum ada resep.
                            </p>
                        )}
                    </section>
                </main>
                <Footer />
                {showPopup && (
                    <SaveSuccessPopup
                        type="resep"
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>
        </>
    );
}
