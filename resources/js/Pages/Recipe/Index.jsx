import Breadcrumb from '@/Components/Common/Breadcrumb';
import FilterButton from '@/Components/Common/FilterButton';
import CategoryCard from '@/Components/Public/CategoryCard';
import RecipeCard from '@/Components/Public/RecipeCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import FilterOptions from '@/data/FilterOptions';
import recipes from '@/data/recipes';
import { Head } from '@inertiajs/react';
import { GiWheat } from 'react-icons/gi';
import { LiaAllergiesSolid } from 'react-icons/lia';
import { PiCarrot, PiCookingPot } from 'react-icons/pi';
import { RiHealthBookLine } from 'react-icons/ri';
import { TbBowlSpoon } from 'react-icons/tb';

export default function Recipe({ auth }) {
    const filterLabels = Object.keys(FilterOptions);
    return (
        <>
            <Head title="Recipe" />
            <div className="flex min-h-screen flex-col">
                <div className="">
                    <div className="">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        <Breadcrumb
                            items={[{ label: 'Resep', href: '/recipe' }]}
                        />

                        {/* ======================================== MAIN ======================================= */}
                        <main>
                            {/* ======================================== SECTION 1 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h3 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        JELAJAHI RESEP KAMI
                                    </h3>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Temukan resep lezat dan bernutrisi dari
                                        berbagai kategori pilihan!
                                    </h2>
                                    <ul className="grid grid-cols-2 gap-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
                                        {[
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <TbBowlSpoon className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Hidangan',
                                                href: '/recipe/hidangan',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <RiHealthBookLine className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Kondisi Kesehatan',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <GiWheat className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Diet',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <LiaAllergiesSolid className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Alergi',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <PiCarrot className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Nutrisi',
                                                href: '#',
                                            },
                                            {
                                                icon: (
                                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                        <PiCookingPot className="h-10 w-10 text-[#70B9BE]" />
                                                    </div>
                                                ),
                                                text: 'Metode Memasak',
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

                            {/* ======================================== SECTION 2 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        FILTER RESEP
                                    </h5>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Gunakan filter untuk menemukan resep
                                        yang sesuai dengan kebutuhan dan selera
                                        Anda!
                                    </h2>
                                    {/* Filter */}
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {Object.entries(FilterOptions)
                                            .filter(
                                                ([label]) =>
                                                    label !== 'Artikel',
                                            ) // Hilangkan filter Artikel
                                            .map(([label, options], index) => (
                                                <FilterButton
                                                    key={index}
                                                    text={label}
                                                    options={options}
                                                />
                                            ))}
                                    </div>

                                    {/* Daftar Resep */}
                                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                                        {recipes.map((recipe, index) => (
                                            <RecipeCard
                                                key={index}
                                                title={recipe.title}
                                                imageUrl={recipe.imageUrl}
                                                link={recipe.link}
                                            />
                                        ))}
                                    </div>

                                    {/* Jarak antar daftar resep */}
                                    <div className="my-12"></div>

                                    {/* Daftar Resep Kedua */}
                                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                                        {recipes
                                            .slice(0, 4)
                                            .map((recipe, index) => (
                                                <RecipeCard
                                                    key={`second-${index}`}
                                                    title={recipe.title}
                                                    imageUrl={recipe.imageUrl}
                                                    link={recipe.link}
                                                />
                                            ))}
                                    </div>

                                    {/* tombol Lihat Resep Lainnya */}
                                    <div className="py-8 text-center text-lg font-extrabold leading-tight tracking-tight md:text-lg lg:mb-6">
                                        <a
                                            href="#"
                                            className="mr-3 inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-center text-lg font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            Lihat Resep Lainnya
                                            <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
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
