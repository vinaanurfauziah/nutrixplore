import Breadcrumb from '@/Components/Common/Breadcrumb';
import RecipeCard from '@/Components/Public/RecipeCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import kategoriData from '@/data/kategoriData';
import resepData from '@/data/resepData';
import { Head } from '@inertiajs/react';

export default function SubKategori({ auth, kategoriSlug, subkategoriSlug }) {
    const kategori = kategoriData[kategoriSlug];
    const subkategori = kategori?.subkategori.find(
        (item) => item.slug === subkategoriSlug,
    );

    const resepList = resepData?.[kategoriSlug]?.[subkategoriSlug] || [];

    if (!kategori || !subkategori) {
        return (
            <>
                <Navbar auth={auth} />
                <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
                    <h1 className="text-xl font-bold text-red-600">
                        Subkategori tidak ditemukan
                    </h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Head title={subkategori.nama} />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />
                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        {
                            label: kategori.nama,
                            href: `/recipe/${kategoriSlug}`,
                        },
                        {
                            label: subkategori.nama,
                            href: `/recipe/${kategoriSlug}/${subkategoriSlug}`,
                        },
                    ]}
                />
                <main className="flex-grow bg-white dark:bg-gray-900">
                    <section className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                        <h3 className="mb-8 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                            {subkategori.nama}
                        </h3>

                        {resepList.length > 0 ? (
                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                {resepList.map((resep) => (
                                    <li key={resep.id}>
                                        <RecipeCard
                                            title={resep.judul}
                                            imageUrl={resep.gambar}
                                            link={`/recipe/${kategoriSlug}/${subkategoriSlug}/${resep.slug}`}
                                            kalori={resep.kalori}
                                            durasi={resep.durasi}
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
            </div>
        </>
    );
}
