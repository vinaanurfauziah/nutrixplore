import Breadcrumb from '@/Components/Common/Breadcrumb';
import CategoryCard from '@/Components/Public/CategoryCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import kategoriData from '@/data/kategoriData';
import { Head } from '@inertiajs/react';

import { BiBowlRice } from 'react-icons/bi';
import { GiBerriesBowl, GiHealthIncrease, GiHeartBeats } from 'react-icons/gi';
import { LuEggFried, LuGrape, LuSalad, LuSoup } from 'react-icons/lu';
import { RiDrinksLine } from 'react-icons/ri';
import { TbLeaf } from 'react-icons/tb';

// Peta nama string ke komponen ikon
const iconMap = {
    LuSalad,
    LuEggFried,
    BiBowlRice,
    GiBerriesBowl,
    TbLeaf,
    LuGrape,
    LuSoup,
    RiDrinksLine,
    GiHealthIncrease,
    GiHeartBeats,
};

export default function Kategori({ auth, kategoriSlug }) {
    const slug = kategoriSlug || 'hidangan';
    const kategori = kategoriData[slug];

    if (!kategori) {
        return (
            <>
                <Navbar auth={auth} />
                <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
                    <h1 className="text-xl font-bold text-red-600">
                        Kategori tidak ditemukan
                    </h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Head title={kategori.nama} />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />
                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        { label: kategori.nama, href: `/recipe/${slug}` },
                    ]}
                />
                <main className="flex-grow bg-white dark:bg-gray-900">
                    <section className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                        <h3 className="mb-8 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                            {kategori.nama.toUpperCase()}
                        </h3>
                        <ul className="grid grid-cols-2 gap-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {kategori.subkategori.map((item, i) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <CategoryCard
                                        key={i}
                                        text={item.nama}
                                        href={`/recipe/${slug}/${item.slug}`}
                                        icon={
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                {Icon && (
                                                    <Icon className="h-10 w-10 text-[#70B9BE]" />
                                                )}
                                            </div>
                                        }
                                    />
                                );
                            })}
                        </ul>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
