export default function AboutJoinCommunity() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 py-12 text-center">
                <h1 className="text-3xl font-extrabold text-[#70B9BE] dark:text-white md:text-4xl">
                    Bergabung dengan Komunitas Kami
                </h1>

                <p className="mt-4 text-gray-800 dark:text-gray-300 md:text-lg">
                    Daftarkan diri Anda sekarang untuk menikmati fitur
                    penyimpanan resep dan artikel, serta menemukan dan
                    membagikan inspirasi kuliner.
                </p>

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

                <p className="mt-4 text-gray-800 dark:text-gray-400 md:text-lg">
                    NutriXplore hadir untuk mendukung setiap langkah perjalanan
                    memasak Anda. Mari ciptakan hidangan lezat dan bagikan
                    kebahagiaan melalui makanan bersama kami!
                </p>
            </div>
        </section>
    );
}
