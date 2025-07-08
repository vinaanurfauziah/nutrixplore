import Breadcrumb from '@/Components/Common/Breadcrumb';
import AboutIntro from '@/Components/Partials/About/AboutIntro';
import AboutJoinCommunity from '@/Components/Partials/About/AboutJoinCommunity';
import FeatureList from '@/Components/Partials/About/FeatureList';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <Breadcrumb
                    items={[{ label: 'Tentang Kami', href: '/about' }]}
                />

                <main>
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <AboutIntro />
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FeatureList />
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <AboutJoinCommunity />
                    </motion.section>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
