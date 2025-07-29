import Breadcrumb from '@/Components/Common/Breadcrumb';
import CategoryCard from '@/Components/Public/CategoryCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import kategoriData from '@/data/kategoriData';
import { Head } from '@inertiajs/react';

// Import ikon dari beberapa paket icon
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as LuIcons from 'react-icons/lu';
import * as PiIcons from 'react-icons/pi';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';

export default function Category({
    auth,
    recipes = [],
    subcategories = [],
    kategoriSlug,
}) {
    const Icons = {
        ...LuIcons,
        ...BiIcons,
        ...BsIcons,
        ...CgIcons,
        ...FaIcons,
        ...TbIcons,
        ...LuIcons,
        ...BiIcons,
        ...BsIcons,
        ...CgIcons,
        ...FaIcons,
        ...TbIcons,
        ...GiIcons,
        ...RiIcons,
        ...PiIcons,
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
                        <Breadcrumb
                            items={[
                                { label: 'Resep', href: '/recipe' },
                                {
                                    label: kategori?.nama || 'Kategori',
                                    href: '#',
                                },
                            ]}
                        />

                        <h1 className="mb-2 text-center text-lg font-extrabold uppercase text-[#70B9BE] dark:text-white">
                            Kategori Resep
                        </h1>

                        {!kategori && (
                            <div className="mb-4 text-red-500">
                                Data kategori tidak ditemukan untuk slug:{' '}
                                <strong>{kategoriSlug}</strong>
                            </div>
                        )}

                        {kategori && subcategories.length > 0 && (
                            <>
                                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {subcategories.map((item, i) => {
                                        console.log(
                                            '🔍 Mencocokkan item:',
                                            item.name,
                                        );

                                        const matchedSub =
                                            kategori.subkategori.find(
                                                (sub) =>
                                                    sub.nama?.toLowerCase() ===
                                                    item.name?.toLowerCase(),
                                            );

                                        console.log(
                                            '🎯 matchedSub:',
                                            matchedSub,
                                        );

                                        const iconName = matchedSub?.icon;
                                        const IconComponent =
                                            iconName && Icons[iconName];

                                        return (
                                            <CategoryCard
                                                key={i}
                                                text={item.name}
                                                href={`/recipe/${kategoriSlug}/${item.name}`}
                                                icon={
                                                    IconComponent ? (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <IconComponent className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ) : null
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        )}
                        {kategori && subcategories.length === 0 && (
                            <div className="mb-4 text-gray-500">
                                Tidak ada subkategori untuk kategori ini.
                            </div>
                        )}
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
