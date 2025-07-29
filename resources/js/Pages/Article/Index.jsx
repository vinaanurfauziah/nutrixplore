import { useState, useMemo } from 'react';
import { Head, usePage } from '@inertiajs/react';

import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';

import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleFilter from '@/Components/Partials/Article/ArticleFilter';
import ArticleGrid from '@/Components/Partials/Article/ArticleGrid';

import { motion } from 'framer-motion';

export default function Article({ auth, articles }) {
    const artikelOptions = useMemo(() => {
        const categories = articles.map((a) => a.category);
        const unique = [...new Set(categories)];
        return ['Semua Artikel', ...unique];
    }, [articles]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(['Semua Artikel']);

    const filteredArticles = selectedCategories.includes('Semua Artikel')
        ? articles
        : articles.filter((article) => selectedCategories.includes(article.category));

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const handleUnsave = () => {
        console.log('Artikel dibatalkan penyimpanannya');
    };

    return (
        <>
            <Head title="Artikel" />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />
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

                                <ArticleFilter
                                    options={artikelOptions}
                                    selected={selectedCategories}
                                    onChange={setSelectedCategories}
                                />

                                {filteredArticles.length > 0 ? (
                                    <ArticleGrid
                                        key={selectedCategories.join(',')}
                                        articles={filteredArticles}
                                        onSave={handleSave}
                                        onUnsave={handleUnsave}
                                    />
                                ) : (
                                    <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
                                        <p className="text-lg font-semibold">Oops! Tidak ada artikel ditemukan.</p>
                                        <p className="mt-1 text-sm">Coba pilih kategori lain, ya!</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </motion.section>
                </main>

                {showPopup && (
                    <SaveSuccessPopup
                        type="artikel"
                        onClose={() => setShowPopup(false)}
                    />
                )}

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
