import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import Breadcrumb from '@/Components/Breadcrumb';
import CategoryCard from '@/Components/CategoryCard';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaRegBookmark,
    FaXTwitter,
} from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

export default function DetailArticle({ auth }) {
    return (
        <>
            <Head title="Detail Artikel" />
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
                                    { label: 'Article', href: '/article' },
                                    {
                                        label: 'Detail Artikel',
                                        href: '/article/detailArticle',
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

                                        {/* ============== BUTTON =============== */}
                                        <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-lg border bg-[#70B9BE] px-4 py-3 text-center text-lg font-medium text-white hover:border-[#70B9BE] hover:bg-white hover:text-[#70B9BE] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                            >
                                                Kembali
                                            </a>
                                            <a
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-lg border border-[#70B9BE] bg-white px-5 py-3 text-center text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                            >
                                                Simpan Artikel
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

                            {/* ======================================== SECTION 2======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-6 lg:gap-8 lg:py-4 xl:gap-0">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <div>
                                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                                Alpukat, buah hijau dengan
                                                tekstur lembut dan rasa creamy,
                                                telah lama dikenal sebagai
                                                makanan super yang kaya manfaat
                                                kesehatan. Selain lezat, alpukat
                                                mengandung berbagai nutrisi
                                                penting yang dapat mendukung
                                                tubuh Anda dalam banyak cara..
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Salah satu keajaiban utama
                                                alpukat adalah kandungan lemak
                                                sehatnya. Tidak seperti lemak
                                                jahat yang ditemukan dalam
                                                makanan olahan, alpukat kaya
                                                akan lemak tak jenuh tunggal
                                                yang baik untuk jantung. Lemak
                                                ini membantu menurunkan kadar
                                                kolesterol jahat (LDL) sambil
                                                meningkatkan kolesterol baik
                                                (HDL), sehingga menjaga
                                                kesehatan pembuluh darah dan
                                                mengurangi risiko penyakit
                                                kardiovaskular..
                                            </p>
                                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                                Tidak hanya itu, alpukat juga
                                                kaya akan serat. Dalam satu buah
                                                alpukat ukuran sedang, Anda bisa
                                                mendapatkan sekitar 10 gram
                                                serat, yang sangat membantu
                                                dalam menjaga pencernaan tetap
                                                sehat. Serat juga mendukung
                                                pengelolaan berat badan karena
                                                memberikan rasa kenyang lebih
                                                lama, sehingga Anda tidak mudah
                                                tergoda untuk makan berlebihan.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Selain lemak sehat dan serat,
                                                alpukat juga kaya akan vitamin
                                                dan mineral. Kandungan vitamin E
                                                yang tinggi berperan sebagai
                                                antioksidan kuat, melindungi
                                                sel-sel tubuh dari kerusakan
                                                akibat radikal bebas. Vitamin C
                                                yang terkandung di dalamnya
                                                mendukung sistem kekebalan tubuh
                                                dan membantu produksi kolagen
                                                untuk kulit sehat.
                                            </p>
                                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                                Kandungan kalium dalam alpukat
                                                juga patut diperhatikan. Kalium
                                                adalah mineral penting yang
                                                membantu mengatur tekanan darah,
                                                mencegah kram otot, dan menjaga
                                                keseimbangan cairan tubuh.
                                                Bahkan, alpukat mengandung lebih
                                                banyak kalium daripada pisang,
                                                menjadikannya pilihan tepat
                                                untuk diet sehat.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Manfaat alpukat tidak hanya
                                                berhenti pada kesehatan fisik.
                                                Studi menunjukkan bahwa alpukat
                                                dapat meningkatkan suasana hati
                                                karena kandungan folatnya yang
                                                tinggi. Folat berperan dalam
                                                produksi serotonin dan dopamin,
                                                dua neurotransmitter yang
                                                memengaruhi kebahagiaan dan
                                                kesejahteraan emosional.
                                            </p>
                                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                                Cara mengonsumsi alpukat pun
                                                sangat fleksibel. Anda bisa
                                                menikmatinya sebagai smoothie,
                                                salad, olesan roti, atau bahkan
                                                dimakan langsung. Dengan rasa
                                                yang netral dan tekstur yang
                                                lembut, alpukat dapat
                                                dikombinasikan dengan berbagai
                                                hidangan.
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Jadi, jika Anda mencari makanan
                                                yang lezat, serbaguna, dan sarat
                                                manfaat, alpukat adalah
                                                jawabannya. Sertakan alpukat
                                                dalam menu harian Anda, dan
                                                rasakan keajaibannya bagi
                                                kesehatan tubuh dan pikiran
                                                Anda..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 3======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
                                    <div className="mr-auto place-self-center lg:col-span-7">
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
                        </main>
                        {/* ======================================== FOOTER ======================================= */}
                        <Footer className="mt-auto" />
                    </div>
                </div>
            </div>
        </>
    );
}
