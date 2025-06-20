import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import Breadcrumb from '@/Components/Common/Breadcrumb';
import CategoryCard from '@/Components/Public/CategoryCard';
import CommentSection from '@/Components/Public/CommentSection';
import TabsDetail from '@/Components/Public/TabsDetail';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import FilterOptions from '@/data/FilterOptions';
import { Head } from '@inertiajs/react';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaRegClock,
} from 'react-icons/fa';
import { FaRegBookmark, FaXTwitter } from 'react-icons/fa6';
import { GiScales } from 'react-icons/gi';
import { LuPrinter } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { PiBowlFood, PiCookingPotBold } from 'react-icons/pi';

export default function DetailResep({ auth }) {
    const filterLabels = Object.keys(FilterOptions);
    return (
        <>
            <Head title="Detail Resep" />
            <div className="">
                <div className="">
                    <div className="flex min-h-screen flex-col">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        {/* ============== BREADCRUMB =============== */}
                        <div>
                            <Breadcrumb
                                items={[
                                    { label: 'Resep', href: '/recipe' },
                                    {
                                        label: 'Detail Resep',
                                        href: '/recipe/detailResep',
                                    },
                                ]}
                            />
                        </div>

                        {/* ======================================== MAIN ======================================= */}
                        <main className="flex-grow">
                            {/* ======================================== SECTION 1 ======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">
                                            Lorem Ipsum Dolor Sit Amet
                                        </h1>

                                        {/* ============== RATING =============== */}
                                        <div className="mb-6 flex max-w-2xl items-center lg:mb-8">
                                            <svg
                                                className="ms-1 h-8 w-8 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-8 w-8 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-8 w-8 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-8 w-8 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="ms-1 h-8 w-8 text-gray-300 dark:text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>

                                        {/* ============== ICON & DATANYA=============== */}
                                        <ul className="grid grid-cols-4 gap-4 text-gray-500 dark:text-gray-400 sm:grid-cols-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-5">
                                            {[
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <FaRegClock className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    text: '5m',
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <PiCookingPotBold className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    text: '15m',
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <PiBowlFood className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    text: '1 Porsi',
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <GiScales className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    text: '345 kkal',
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

                                        {/* ============== BUTTON =============== */}
                                        <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-lg border bg-[#70B9BE] px-4 py-3 text-center text-lg font-medium text-white hover:border-[#70B9BE] hover:bg-white hover:text-[#70B9BE] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                            >
                                                Langsung ke resep
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-lg border border-[#70B9BE] bg-white px-5 py-3 text-center text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                            >
                                                Simpan Resep
                                                <FaRegBookmark className="-mr-1 ml-2 h-6 w-6" />
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-lg border border-[#70B9BE] bg-white px-5 py-3 text-center text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                            >
                                                Print
                                                <LuPrinter className="-mr-1 ml-2 h-6 w-6" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* ============== GAMBAR =============== */}
                                    <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                                        <img src={EggTomatoSoup} alt="egg" />
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 2 ======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto grid max-w-screen-2xl xl:gap-0">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <div className="">
                                            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
                                                Detail Resep
                                            </h1>
                                            <TabsDetail />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 3======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <h1 className="mb-4 max-w-xl text-xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl lg:mb-8">
                                            Kategori yang Relevan
                                        </h1>
                                        {/* ============== BUTTON =============== */}
                                        <div className="text-gray-500 dark:text-gray-400">
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                            >
                                                Sarapan
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                            >
                                                Diabetes
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                            >
                                                Rendah Kalori
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                            >
                                                Ketogenic
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 4 ======================================= */}
                            <section className="bg-gray-200 dark:bg-gray-800">
                                <div className="mx-auto flex max-w-screen-2xl justify-center px-4 py-8 lg:py-4">
                                    <div className="flex items-center gap-4">
                                        <h1 className="text-xl font-normal leading-tight tracking-tight text-black dark:text-white md:text-xl">
                                            Bagikan Resep Ini:
                                        </h1>
                                        <ul className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                                            {[
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                                            <FaFacebookF className="h-8 w-8 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    href: '/recipe/hidangan',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                                            <FaXTwitter className="h-8 w-8 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                                            <FaInstagram className="h-8 w-8 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                                            <FaPinterestP className="h-8 w-8 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    href: '#',
                                                },
                                                {
                                                    icon: (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                                            <MdOutlineEmail className="h-8 w-8 text-[#70B9BE]" />
                                                        </div>
                                                    ),
                                                    href: '#',
                                                },
                                            ].map((item, index) => (
                                                <CategoryCard
                                                    key={index}
                                                    icon={item.icon}
                                                    href={item.href}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 5 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <CommentSection className="mt-auto" />
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
