import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

export default function FeatureList() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <h2 className="mb-8 text-center text-3xl font-extrabold text-[#70B9BE] dark:text-white md:text-4xl lg:mb-16">
                    Apa yang Kami Tawarkan
                </h2>

                <div className="grid grid-cols-1 gap-12 text-center text-gray-600 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center">
                        <BiFoodMenu className="h-16 w-16 text-[#70B9BE]" />
                        <p className="mt-4 max-w-[420px] text-lg text-gray-800">
                            Jelajahi berbagai resep mulai dari hidangan utama,
                            camilan, hingga minuman untuk berbagai kesempatan.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiFilter className="h-16 w-16 text-[#70B9BE]" />
                        <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                            Temukan resep dengan informasi kandungan gizi yang
                            membantu Anda memilih hidangan sesuai kebutuhan
                            nutrisi.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiBookmark className="h-16 w-16 text-[#70B9BE]" />
                        <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                            Simpan resep favorit Anda dalam satu akun untuk
                            akses mudah kapan saja.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <TbArticle className="h-16 w-16 text-[#70B9BE]" />
                        <p className="mt-4 max-w-[350px] text-lg text-gray-800">
                            Cari resep berdasarkan kategori, bahan, atau tingkat
                            kesulitan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
