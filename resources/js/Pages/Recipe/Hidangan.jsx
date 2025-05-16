import Breadcrumb from '@/Components/Breadcrumb';
import CategoryCard from '@/Components/CategoryCard';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import FilterOptions from '@/data/FilterOptions';
import { Head } from '@inertiajs/react';
import { BiBowlRice } from 'react-icons/bi';
import { GiBerriesBowl } from 'react-icons/gi';
import { LuEggFried, LuGrape, LuSalad, LuSoup } from 'react-icons/lu';
import { RiDrinksLine } from 'react-icons/ri';
import { TbLeaf } from 'react-icons/tb';

export default function Hidangan({ auth }) {
    const filterLabels = Object.keys(FilterOptions);
    return (
        <>
            <Head title="Hidangan" />
            <div className="">
                <div className="">
                    <div className="flex min-h-screen flex-col">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        <Breadcrumb
                            items={[
                                { label: 'Resep', href: '/recipe' },
                                { label: 'Hidangan', href: '/recipe/hidangan' },
                            ]}
                        />

                        {/* ======================================== MAIN ======================================= */}
                        <main className="flex-grow">
                            {/* ======================================== SECTION 1 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h3 className="mb-8 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-16">
                                        KATEGORI HIDANGAN
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:grid-cols-3 lg:grid-cols-8">
                                        {[
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <LuSalad className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Hidangan Pembuka',
                                                href: '/recipe/hidangan/pembuka',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <LuEggFried className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Sarapan',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <BiBowlRice className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Hidangan Utama',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <GiBerriesBowl className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Hidangan Penutup',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <TbLeaf className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Pelengkap',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <LuGrape className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Cemilan',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <LuSoup className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Hidangan Berkuah',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <RiDrinksLine className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Minuman',
                                                href: '#',
                                            },
                                        ].map((item, index) => (
                                            <CategoryCard
                                                key={index}
                                                icon={item.icon}
                                                text={item.text}
                                                href={item.href}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </main>

                        {/* ======================================== FOOTER ======================================= */}
                        <Footer className="mt-auto" />
                    </div>
                </div>
            </div>
        </>
    );
}
