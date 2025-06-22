import { FiMail, FiSend } from 'react-icons/fi';

export default function AboutJoinCommunity() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-3xl px-4 py-16 text-center">
                <h2 className="text-4xl font-extrabold text-[#70B9BE] dark:text-white">
                    Bergabung dengan Komunitas Kami
                </h2>

                <p className="mt-4 text-gray-700 dark:text-gray-300 md:text-lg">
                    Daftarkan diri Anda sekarang untuk menikmati fitur
                    penyimpanan resep dan artikel, serta menemukan dan
                    membagikan inspirasi kuliner.
                </p>

                <div className="mx-auto mt-8 w-full max-w-md">
                    <div className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
                        <div className="flex items-center gap-3">
                            <FiMail className="text-xl text-[#70B9BE]" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                nutridapur@gmail.com
                            </span>
                        </div>
                        <a
                            href="mailto:nutridapur@gmail.com"
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#70B9BE] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5da3a8] focus:outline-none focus:ring-4 focus:ring-[#70B9BE]/40 dark:focus:ring-[#70B9BE]/60"
                        >
                            <FiSend className="text-base" />
                            Kirim Email
                        </a>
                    </div>
                </div>

                <p className="mt-10 text-gray-800 dark:text-gray-400 md:text-lg">
                    NutriDapur hadir untuk mendukung setiap langkah perjalanan
                    memasak Anda. Mari ciptakan hidangan lezat dan bagikan
                    kebahagiaan melalui makanan bersama kami!
                </p>
            </div>
        </section>
    );
}
