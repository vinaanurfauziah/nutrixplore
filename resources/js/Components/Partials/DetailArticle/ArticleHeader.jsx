import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import { FaRegBookmark } from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';

export default function ArticleHeader() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">
                        Lorem Ipsum Dolor Sit Amet
                    </h1>

                    {/* Rating */}
                    <div className="mb-6 flex max-w-2xl items-center lg:mb-8">
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="ms-1 h-8 w-8 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <svg
                            className="ms-1 h-8 w-8 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>

                    {/* Tombol */}
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
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src={EggTomatoSoup} alt="egg" />
                </div>
            </div>
        </section>
    );
}
