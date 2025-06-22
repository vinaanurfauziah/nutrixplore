import { FaRegBookmark } from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';

export default function ArticleHeader() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="w-full max-w-[680px] px-4 pt-10 lg:ml-[calc((100%-680px)/4)]">
                {/* Judul Artikel */}
                <h1 className="mb-5 text-4xl font-extrabold leading-snug text-gray-900 dark:text-white md:text-5xl">
                    Lorem Ipsum Dolor Sit Amet
                </h1>

                {/* Metadata */}
                <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                    Oleh <span className="font-semibold">NutriDapur</span> · 21
                    Juni 2025 · 5 menit baca
                </div>

                {/* Tombol Aksi - Ikon Saja */}
                <div className="flex gap-3">
                    <button
                        className="group flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#70B9BE] shadow-md ring-1 ring-[#70B9BE]/30 transition-all duration-200 hover:bg-[#70B9BE] hover:text-white hover:shadow-lg active:scale-95 dark:bg-gray-900"
                        title="Simpan Artikel"
                    >
                        <FaRegBookmark className="h-[22px] w-[22px]" />
                    </button>

                    <button
                        className="group flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#70B9BE] shadow-md ring-1 ring-[#70B9BE]/30 transition-all duration-200 hover:bg-[#70B9BE] hover:text-white hover:shadow-lg active:scale-95 dark:bg-gray-900"
                        title="Cetak Artikel"
                        onClick={() => window.print()}
                    >
                        <LuPrinter className="h-[22px] w-[22px]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
