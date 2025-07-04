import { motion } from 'framer-motion';

export default function TagList({
    tags = [],
    title = 'Kategori yang Relevan',
    animated = true,
}) {
    return (
        <section className="bg-white px-4 pb-10 pt-2 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:gap-2 lg:py-2 xl:gap-0">
                <div className="w-full space-y-4 lg:col-span-7">
                    <h2 className="text-md mb-6 font-semibold text-gray-900 dark:text-white md:text-2xl">
                        {title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) =>
                            animated ? (
                                <motion.a
                                    key={index}
                                    href={tag.href}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#70B9BE] to-[#45A29E] px-5 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:from-gray-700 hover:to-gray-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#70B9BE] dark:from-gray-700 dark:to-gray-600"
                                >
                                    {tag.label}
                                </motion.a>
                            ) : (
                                <a
                                    key={index}
                                    href={tag.href}
                                    className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-700"
                                >
                                    {tag.label}
                                </a>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
