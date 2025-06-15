import ArticleCard from '@/Components/ArticleCard';
import Breadcrumb from '@/Components/Breadcrumb';
import FilterButton from '@/Components/FilterButton';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import articles from '@/data/articles';
import FilterOptions from '@/data/FilterOptions';
import { Head } from '@inertiajs/react';

export default function Article({ auth }) {
    const artikelOptions = FilterOptions.Artikel || [];

    return (
        <>
            <Head title="Article" />
            <div className="flex min-h-screen flex-col">
                <div className="">
                    <div className="">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        {/* ======================================== BREADCRUMB ======================================= */}
                        <Breadcrumb
                            items={[{ label: 'Artikel', href: '/article' }]}
                        />

                        {/* ======================================== MAIN ======================================= */}
                        <main>
                            {/* ======================================== SECTION 3 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        ARTIKEL
                                    </h5>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Temukan artikel tentang kondisi
                                        kesehatan, nutrisi, bahan makanan, dan
                                        tips memasak untuk mendukung gaya hidup
                                        sehat.
                                    </h2>
                                    {/* Filter */}
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        <FilterButton
                                            text="Artikel"
                                            options={artikelOptions}
                                        />
                                    </div>
                                    {/* Daftar Artikel */}
                                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                                        {articles.map((article, index) => (
                                            <ArticleCard
                                                key={index}
                                                category={article.category}
                                                title={article.title}
                                                description={
                                                    article.description
                                                }
                                                imageUrl={article.imageUrl}
                                                link={article.link}
                                            />
                                        ))}
                                    </div>
                                    <div className="my-12"></div>{' '}
                                    {/* Daftar Artikel Kedua */}
                                    <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                                        {articles.map((article, index) => (
                                            <ArticleCard
                                                key={`second-${index}`}
                                                category={article.category}
                                                title={article.title}
                                                description={
                                                    article.description
                                                }
                                                imageUrl={article.imageUrl}
                                                link={article.link}
                                            />
                                        ))}
                                    </div>
                                    {/* tombol Lihat Resep Lainnya */}
                                    <div className="py-8 text-center text-lg font-extrabold leading-tight tracking-tight md:text-lg lg:mb-6">
                                        <a
                                            href="#"
                                            className="mr-3 inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-center text-lg font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            Lihat Artikel Lainnya
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
