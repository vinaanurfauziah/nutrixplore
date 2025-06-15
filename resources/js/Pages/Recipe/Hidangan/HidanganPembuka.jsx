import Breadcrumb from '@/Components/Breadcrumb';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import RecipeCard from '@/Components/RecipeCard';
import FilterOptions from '@/data/FilterOptions';
import recipes from '@/data/recipes';
import { Head } from '@inertiajs/react';

export default function HidanganPembuka({ auth }) {
    const filterLabels = Object.keys(FilterOptions);
    return (
        <>
            <Head title="Hidangan Pembuka" />
            <div className="flex min-h-screen flex-col">
                <div className="">
                    <div className="">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        <Breadcrumb
                            items={[
                                { label: 'Resep', href: '/recipe' },
                                { label: 'Hidangan', href: '/recipe/hidangan' },
                                {
                                    label: 'Hidangan Pembuka',
                                    href: '/recipe/hidangan/pembuka',
                                },
                            ]}
                        />

                        {/* ======================================== MAIN ======================================= */}
                        <main>
                            {/* ======================================== SECTION 3 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h3 className="mb-8 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-0">
                                        HIDANGAN PEMBUKA
                                    </h3>
                                </div>
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-6">
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
