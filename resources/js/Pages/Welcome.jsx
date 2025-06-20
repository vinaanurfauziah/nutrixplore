import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import ArticleCard from '@/Components/Public/ArticleCard';
import RecipeCard from '@/Components/Public/RecipeCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import Accordion from '@/components/Public/Accordion';
import articles from '@/data/articles';
import faqData from '@/data/faqData';
import recipes from '@/data/recipes';
import { Head } from '@inertiajs/react';
import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="nutriXplore" />
            <div className="flex min-h-screen flex-col">
                <div className="">
                    <div className="">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        {/* ======================================== MAIN ======================================= */}
                        <main>
                            {/* ======================================== SECTION 1 ======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#70B9BE] px-6 py-16 shadow-lg sm:grid-cols-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                                        <div className="order-2 sm:order-1 sm:col-span-7">
                                            <h1
                                                className="mb-4 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                                                style={{
                                                    textShadow:
                                                        '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                                }}
                                            >
                                                Resep Sehat Sesuai Kebutuhanmu
                                            </h1>
                                            <p className="mb-6 mt-6 max-w-2xl text-sm font-light text-white sm:text-base md:text-lg lg:text-xl">
                                                Pilih resep berdasarkan kondisi
                                                kesehatan atau preferensi
                                                makanan. Bantu tubuhmu tetap
                                                bugar lewat makanan yang tepat.
                                            </p>
                                            <a
                                                href="/recipe/detailResep"
                                                className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-lg hover:bg-gray-100 sm:text-lg"
                                            >
                                                Jelajahi Sekarang
                                                <span className="ml-2 rounded bg-black p-1">
                                                    <svg
                                                        className="h-4 w-4 text-white"
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
                                                </span>
                                            </a>
                                        </div>
                                        <div className="order-1 flex justify-center sm:order-2 sm:col-span-5 sm:justify-end">
                                            <img
                                                src={EggTomatoSoup}
                                                alt="Ilustrasi resep"
                                                className="max-h-80 w-full max-w-xs object-contain sm:max-h-96 sm:max-w-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 2 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                                        FITUR UTAMA YANG MEMPERMUDAH ANDA!
                                    </h5>
                                    <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                                        Fitur kami membantu Anda menemukan dan
                                        menyajikan resep terbaik dengan mudah
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                        {/* Card 1 */}
                                        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                <BiFoodMenu className="h-8 w-8 text-[#70B9BE]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    Resep Lengkap
                                                </h3>
                                                <p className="text-base text-gray-500">
                                                    Resep menarik pilihan
                                                </p>
                                            </div>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                <BiFilter className="h-8 w-8 text-[#70B9BE]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    Filter Fleksibel
                                                </h3>
                                                <p className="text-base text-gray-500">
                                                    Filter sesuai kebutuhan
                                                </p>
                                            </div>
                                        </div>
                                        {/* Card 3 */}
                                        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                <BiBookmark className="h-8 w-8 text-[#70B9BE]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    Bookmark Resep
                                                </h3>
                                                <p className="text-base text-gray-500">
                                                    Simpan favorit Anda
                                                </p>
                                            </div>
                                        </div>
                                        {/* Card 4 */}
                                        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                <TbArticle className="h-8 w-8 text-[#70B9BE]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    Artikel Kesehatan
                                                </h3>
                                                <p className="text-base text-gray-500">
                                                    Pilihan artikel menarik
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 3 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        RESEP TERBARU
                                    </h5>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Lihatlah resep terbaru kami dan temukan
                                        resep favorit baru.
                                    </h2>
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
                                            href="/recipe"
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

                            {/* ======================================== SECTION 4 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        ARTIKEL KESEHATAN
                                    </h5>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Lihatlah artikel kesehatan kami dan
                                        temukan artikel yang relevan dengan
                                        Anda.
                                    </h2>
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

                                    {/* tombol Lihat Resep Lainnya */}
                                    <div className="py-8 text-center text-lg font-extrabold leading-tight tracking-tight md:text-lg lg:mb-6">
                                        <a
                                            href="/article"
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

                            {/* ======================================== SECTION 5 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-lg px-4 py-8 lg:py-16">
                                    <h5 className="mb-2 text-center text-lg font-extrabold leading-tight tracking-tight text-[#70B9BE] dark:text-white md:text-lg lg:mb-6">
                                        PERTANYAAN UMUM TENTANG NUTRIXPLORE
                                    </h5>
                                    <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                                        Temukan Solusi dan Jawaban atas
                                        Kebutuhan Anda di Aplikasi Ini
                                    </h2>
                                    <div className="text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="container mx-auto p-4">
                                            <Accordion items={faqData} />
                                        </div>
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
