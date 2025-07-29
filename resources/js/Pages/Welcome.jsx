import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';

import FaqSection from '@/Components/Partials/Home/FaqSection';
import FeatureSection from '@/Components/Partials/Home/FeatureSection';
import HealthArticleSection from '@/Components/Partials/Home/HealthArticleSection';
import HeroSection from '@/Components/Partials/Home/HeroSection';
import LatestRecipeSection from '@/Components/Partials/Home/LatestRecipeSection';

export default function Welcome({ auth, recipes, articles }) {
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: false, amount: 0.2 },
    };

    return (
        <>
            <Head title="NutriDapur" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <main>
                    <motion.div {...fadeInUp}>
                        <HeroSection />
                    </motion.div>

                    <motion.div {...fadeInUp}>
                        <FeatureSection />
                    </motion.div>

                    <motion.div {...fadeInUp}>
                        <LatestRecipeSection auth={auth} recipes={recipes} />
                    </motion.div>

                    <motion.div {...fadeInUp}>
                        <HealthArticleSection auth={auth} articles={articles} />
                    </motion.div>

                    <motion.div {...fadeInUp}>
                        <FaqSection />
                    </motion.div>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
