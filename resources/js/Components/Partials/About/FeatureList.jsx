import { motion } from 'framer-motion';
import { BiBookmark, BiFilter, BiFoodMenu } from 'react-icons/bi';
import { TbArticle } from 'react-icons/tb';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function FeatureList() {
    const features = [
        {
            icon: <BiFoodMenu className="h-16 w-16 text-[#70B9BE]" />,
            desc: 'Jelajahi berbagai resep mulai dari hidangan utama, camilan, hingga minuman untuk berbagai kesempatan.',
        },
        {
            icon: <BiFilter className="h-16 w-16 text-[#70B9BE]" />,
            desc: 'Temukan resep dengan informasi kandungan gizi yang membantu Anda memilih hidangan sesuai kebutuhan nutrisi.',
        },
        {
            icon: <BiBookmark className="h-16 w-16 text-[#70B9BE]" />,
            desc: 'Simpan resep favorit Anda dalam satu akun untuk akses mudah kapan saja.',
        },
        {
            icon: <TbArticle className="h-16 w-16 text-[#70B9BE]" />,
            desc: 'Cari resep berdasarkan kategori, bahan, atau tingkat kesulitan.',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <motion.h2
                    className="mb-8 text-center text-3xl font-extrabold text-[#70B9BE] dark:text-white md:text-4xl lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    Apa yang Kami Tawarkan
                </motion.h2>

                <div className="grid grid-cols-1 gap-12 text-center text-gray-600 md:grid-cols-2 lg:grid-cols-2">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center rounded-xl p-6"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {f.icon}
                            <p className="mt-4 max-w-[420px] text-lg text-gray-800 dark:text-gray-300">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
