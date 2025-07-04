import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

import FilterOptions from '@/data/FilterOptions';
import getAllArticles from '@/data/getAllArticles'; // ✅ pakai ini saja

import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import SectionHeading from '@/Components/Common/SectionHeading';
import ArticleFilter from '@/Components/Partials/Article/ArticleFilter';
import ArticleGrid from '@/Components/Partials/Article/ArticleGrid';

import { motion } from 'framer-motion';

export default function Article({ auth }) {
    const artikelData = getAllArticles(); // ✅ Pindahkan ke sini

    const artikelOptions = FilterOptions.Artikel || [];

    const [showPopup, setShowPopup] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([
        'Semua Artikel',
    ]);

    // Filter berdasarkan kategori
    const filteredArticles = selectedCategories.includes('Semua Artikel')
        ? artikelData
        : artikelData.filter((article) =>
              selectedCategories.includes(article.category),
          );

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Artikel dibatalkan penyimpanannya');
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

                                {/* Filter Kategori */}
                                <ArticleFilter
                                    options={artikelOptions}
                                    selected={selectedCategories}
                                    onChange={setSelectedCategories}
                                />

                                {/* Daftar Artikel atau Fallback */}
                                {filteredArticles.length > 0 ? (
                                    <ArticleGrid
                                        key={selectedCategories.join(',')}
                                        articles={filteredArticles}
                                        onSave={handleSave}
                                        onUnsave={handleUnsave}
                                    />
                                ) : (
                                    <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="mx-auto mb-4 h-16 w-16 text-[#70B9BE]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h9A2.25 2.25 0 0016.5 17.25v-3.75m0 0L21 15m-4.5-1.5l4.5-4.5"
                                            />
                                        </svg>
                                        <p className="text-lg font-semibold">
                                            Oops! Tidak ada artikel ditemukan.
                                        </p>
                                        <p className="mt-1 text-sm">
                                            Coba pilih kategori lain, ya!
                                        </p>
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
