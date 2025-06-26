import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

import artikelData from '@/data/artikelData';
import FilterOptions from '@/data/FilterOptions';

import MoreButton from '@/Components/Common/MoreButton';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleFilter from '@/Components/Partials/Article/ArticleFilter';
import ArticleGrid from '@/Components/Partials/Article/ArticleGrid';
import { motion } from 'framer-motion';

export default function Article({ auth }) {
    const artikelOptions = FilterOptions.Artikel || [];
    const [visibleCount, setVisibleCount] = useState(4);

    const visibleArticles = artikelData.slice(0, visibleCount);

    const handleLoadMore = () => {
        // Hanya tambahkan jika masih ada artikel tersisa
        if (visibleCount < artikelData.length) {
            setVisibleCount((prev) => prev + 4);
        }
    };

    return (
        <>
            <Head title="Article" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <Breadcrumb items={[{ label: 'Artikel', href: '/article' }]} />

                <main>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <section className="bg-white dark:bg-gray-900">
                            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                                <SectionHeading
                                    subtitle="ARTIKEL"
                                    title="Temukan artikel tentang kondisi kesehatan, nutrisi, bahan makanan, dan tips memasak untuk mendukung gaya hidup sehat."
                                />
                                <ArticleFilter options={artikelOptions} />
                                <ArticleGrid articles={visibleArticles} />

                                <div className="text-center">
                                    <MoreButton
                                        text="Lihat Artikel Lainnya"
                                        onClick={handleLoadMore}
                                    />
                                </div>
                            </div>
                        </section>
                    </motion.section>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
