import { useState, useMemo } from 'react';
import { Head, usePage, router } from '@inertiajs/react';

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
        const unique = [
            ...new Map(articles.map((a) => [a.category?.id, a.category?.name])).entries(),
        ]
            .filter(([id, name]) => id && name)
            .map(([id, name]) => ({ id, name }));

        return [{ id: 'all', name: 'Semua Artikel' }, ...unique];
    }, [articles]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(['all']);

    const filteredArticles = useMemo(() => {
        if (selectedCategories.includes('all')) return articles;

        return articles.filter((article) =>
            article.category && selectedCategories.includes(article.category.id)
        );
    }, [articles, selectedCategories]);

    const handleSave = (articleId) => {
    if (!auth?.user) {
        router.visit(route('login')); // redirect ke login jika belum login
        return;
    }

    // Gunakan route helper jika tersedia, fallback ke string
    const url = route?.has('articles.save')
        ? route('articles.save', articleId)
        : `/articles/save/${articleId}`;

    router.post(url, {}, {
        onSuccess: () => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        },
        onError: (errors) => {
            console.error('Save error:', errors);
            alert('Gagal menyimpan artikel.');
        },
        preserveScroll: true,
    });
};

const handleUnsave = (articleId) => {
    if (!auth?.user) {
        router.visit(route('login'));
        return;
    }

    const url = route?.has('articles.unsave')
        ? route('articles.unsave', articleId)
        : `/articles/unsave/${articleId}`;

    router.delete(url, {
        onSuccess: () => {
            alert('Artikel dihapus dari simpanan.');
        },
        onError: (errors) => {
            console.error('Unsave error:', errors);
            alert('Gagal menghapus artikel dari simpanan.');
        },
        preserveScroll: true,
    });
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
                                    options={artikelOptions} // ✅ sekarang kirim id dan name
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
