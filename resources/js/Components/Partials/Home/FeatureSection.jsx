import SectionHeading from '@/Components/Common/SectionHeading';
import { motion } from 'framer-motion';
import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            type: 'spring',
            stiffness: 80,
        },
    }),
};

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
        <motion.section
            className="overflow-hidden bg-white dark:bg-gray-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="FITUR UTAMA YANG MEMPERMUDAH ANDA!"
                    title="Fitur kami membantu Anda menemukan dan menyajikan resep terbaik dengan mudah"
                />

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="flex cursor-pointer items-center gap-4 rounded-2xl bg-white p-6 shadow-md"
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            custom={i}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 15,
                                },
                            }}
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
