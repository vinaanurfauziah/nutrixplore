import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

export default function FeatureSection() {
    const features = [
        {
            icon: <BiFoodMenu className="h-8 w-8 text-[#70B9BE]" />,
            title: 'Resep Lengkap',
            desc: 'Resep menarik pilihan',
        },
        {
            icon: <BiFilter className="h-8 w-8 text-[#70B9BE]" />,
            title: 'Filter Fleksibel',
            desc: 'Filter sesuai kebutuhan',
        },
        {
            icon: <BiBookmark className="h-8 w-8 text-[#70B9BE]" />,
            title: 'Bookmark Resep',
            desc: 'Simpan favorit Anda',
        },
        {
            icon: <TbArticle className="h-8 w-8 text-[#70B9BE]" />,
            title: 'Artikel Kesehatan',
            desc: 'Pilihan artikel menarik',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                    FITUR UTAMA YANG MEMPERMUDAH ANDA!
                </h5>
                <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                    Fitur kami membantu Anda menemukan dan menyajikan resep
                    terbaik dengan mudah
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {f.title}
                                </h3>
                                <p className="text-base text-gray-500">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
