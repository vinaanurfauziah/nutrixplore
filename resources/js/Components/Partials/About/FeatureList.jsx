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
            icon: (
                <BiFoodMenu className="h-14 w-14 text-[#70B9BE] sm:h-16 sm:w-16" />
            ),
            desc: 'Jelajahi berbagai resep mulai dari hidangan utama, camilan, hingga minuman untuk berbagai kesempatan.',
        },
        {
            icon: (
                <BiFilter className="h-14 w-14 text-[#70B9BE] sm:h-16 sm:w-16" />
            ),
            desc: 'Temukan resep dengan informasi kandungan gizi yang membantu Anda memilih hidangan sesuai kebutuhan nutrisi.',
        },
        {
            icon: (
                <BiBookmark className="h-14 w-14 text-[#70B9BE] sm:h-16 sm:w-16" />
            ),
            desc: 'Simpan resep favorit Anda dalam satu akun untuk akses mudah kapan saja.',
        },
        {
            icon: (
                <TbArticle className="h-14 w-14 text-[#70B9BE] sm:h-16 sm:w-16" />
            ),
            desc: 'Cari resep berdasarkan kategori, bahan, atau tingkat kesulitan.',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
                <motion.h2
                    className="mb-10 text-center text-2xl font-extrabold text-[#70B9BE] dark:text-white sm:text-3xl md:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    Apa yang Kami Tawarkan
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center rounded-xl bg-gray-50 px-6 py-8 transition duration-300 dark:bg-gray-800 sm:px-8 sm:py-10"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                            }}
                        >
                            {f.icon}
                            <p className="mt-4 max-w-sm text-center text-base text-gray-800 dark:text-gray-300 sm:text-lg">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
