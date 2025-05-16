import AutentikasiImage from '@/Assets/Autentikasi-2.png';
import Breadcrumb from '@/Components/Breadcrumb';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us" />
            <div className="flex min-h-screen flex-col">
                <div className="">
                    <div className="">
                        {/* ======================================== HEADER ======================================= */}
                        <header>
                            <Navbar auth={auth} />
                        </header>

                        {/* ======================================== BREADCRUMB ======================================= */}
                        <Breadcrumb
                            items={[{ label: 'Tentang Kami', href: '/about' }]}
                        />

                        {/* ======================================== MAIN ======================================= */}
                        <main>
                            {/* ======================================== SECTION 1 ======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    {/* Judul di atas, full width */}
                                    <div className="mb-10 text-center sm:text-left">
                                        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                            Tentang Kami
                                        </h1>
                                    </div>

                                    {/* Gambar dan teks di bawah judul */}
                                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:items-center">
                                        {/* Gambar di kiri */}
                                        <div className="flex justify-center sm:col-span-5 sm:justify-start">
                                            <img
                                                src={AutentikasiImage}
                                                alt="Ilustrasi resep"
                                                className="w-full max-w-sm object-contain sm:max-h-96"
                                            />
                                        </div>

                                        {/* Teks di kanan */}
                                        <div className="text-center sm:col-span-7 sm:text-left">
                                            <p className="mb-6 text-gray-800 md:text-lg lg:text-xl">
                                                Selamat datang di NutriXplore,
                                                destinasi terpercaya untuk
                                                menemukan berbagai resep masakan
                                                lezat yang memudahkan aktivitas
                                                memasak sehari-hari. NutriXplore
                                                hadir untuk membantu Anda
                                                mendapatkan inspirasi memasak
                                                sesuai dengan kebutuhan dan
                                                selera Anda.
                                            </p>
                                            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                                                Misi Kami
                                            </h2>
                                            <p className="mt-2 text-gray-800 md:text-lg lg:text-xl">
                                                Kami berkomitmen untuk
                                                menyediakan platform yang
                                                memudahkan pengguna dalam
                                                mencari, menyimpan, dan berbagi
                                                resep masakan secara praktis.
                                                Dengan antarmuka yang ramah
                                                pengguna, kami mendukung
                                                pengalaman memasak yang nyaman
                                                bagi semua orang, baik pemula
                                                maupun ahli.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 2 ======================================= */}
                            <section className="bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                    {/* Judul Section */}
                                    <h2 className="mb-8 text-center text-3xl font-extrabold text-[#70B9BE] dark:text-white md:text-4xl lg:mb-16">
                                        Apa yang Kami Tawarkan
                                    </h2>

                                    {/* Grid Container */}
                                    <div className="grid grid-cols-1 gap-12 text-center text-gray-600 md:grid-cols-2 lg:grid-cols-2">
                                        {/* Item 1 */}
                                        <div className="flex flex-col items-center">
                                            <BiFoodMenu className="h-16 w-16 text-[#70B9BE]" />
                                            <p className="mt-4 max-w-[420px] text-lg text-gray-800">
                                                Jelajahi berbagai resep mulai
                                                dari hidangan utama, camilan,
                                                hingga minuman untuk berbagai
                                                kesempatan.
                                            </p>
                                        </div>

                                        {/* Item 2 */}
                                        <div className="flex flex-col items-center">
                                            <BiFilter className="h-16 w-16 text-[#70B9BE]" />
                                            <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                                                Temukan resep dengan informasi
                                                kandungan gizi yang membantu
                                                Anda memilih hidangan sesuai
                                                kebutuhan nutrisi.
                                            </p>
                                        </div>

                                        {/* Item 3 */}
                                        <div className="flex flex-col items-center">
                                            <BiBookmark className="h-16 w-16 text-[#70B9BE]" />
                                            <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                                                Simpan resep favorit Anda dalam
                                                satu akun untuk akses mudah
                                                kapan saja.
                                            </p>
                                        </div>

                                        {/* Item 4 */}
                                        <div className="flex flex-col items-center">
                                            <TbArticle className="h-16 w-16 text-[#70B9BE]" />
                                            <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                                                Cari resep berdasarkan kategori,
                                                bahan, atau tingkat kesulitan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ======================================== SECTION 3 ======================================= */}
                            <section className="bg-white dark:bg-gray-800">
                                <div className="mx-auto max-w-4xl px-4 py-12 text-center">
                                    {/* Judul */}
                                    <h1 className="text-3xl font-extrabold text-[#70B9BE] dark:text-white md:text-4xl">
                                        Bergabung dengan Komunitas Kami
                                    </h1>

                                    {/* Deskripsi */}
                                    <p className="mt-4 text-gray-800 dark:text-gray-300 md:text-lg">
                                        Daftarkan diri Anda sekarang untuk
                                        menikmati fitur penyimpanan resep dan
                                        artikel, serta menemukan dan membagikan
                                        inspirasi kuliner.
                                    </p>

                                    {/* Form Email */}
                                    <div className="mx-auto mt-6 w-full max-w-md">
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                                                <svg
                                                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                value="nutrixplore@gmail.com"
                                                readOnly
                                                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                            />
                                            <a
                                                href="mailto:nutrixplore@gmail.com"
                                                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                                            >
                                                Kirim Email
                                            </a>
                                        </div>
                                    </div>

                                    {/* Kalimat Penutup */}
                                    <p className="mt-4 text-gray-800 dark:text-gray-400 md:text-lg">
                                        NutriXplore hadir untuk mendukung setiap
                                        langkah perjalanan memasak Anda. Mari
                                        ciptakan hidangan lezat dan bagikan
                                        kebahagiaan melalui makanan bersama
                                        kami!
                                    </p>
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
