import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start gap-10 rounded-2xl bg-[#70B9BE] px-6 py-12 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    {/* LEFT SIDE */}
                    <motion.div
                        className="w-full text-left sm:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            }}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Resep Sehat Sesuai Kebutuhanmu
                        </motion.h1>
                        <motion.p
                            className="mb-6 mt-4 text-base font-light text-white sm:text-lg md:text-xl lg:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Pilih resep berdasarkan kondisi kesehatan atau
                            preferensi makanan. Bantu tubuhmu tetap bugar lewat
                            makanan yang tepat.
                        </motion.p>
                        <motion.a
                            href="/recipe"
                            className="group mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 text-base font-semibold text-gray-800 shadow-lg transition hover:bg-white sm:text-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 1.2,
                                duration: 0.6,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Jelajahi Sekarang</span>
                            <motion.span
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12"
                                whileHover={{ rotate: [0, 10, -5, 0] }}
                                transition={{ duration: 0.6, type: 'spring' }}
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="hidden w-full text-center sm:block sm:w-1/3 sm:text-right"
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <img
                            src={EggTomatoSoup}
                            alt="Ilustrasi resep"
                            className="mx-auto h-40 w-auto object-contain sm:h-64 md:h-72 lg:h-80"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
