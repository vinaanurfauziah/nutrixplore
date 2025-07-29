import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import ArticleCard from '@/Components/Public/ArticleCard';
import { Head, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SavedArticles() {
    const { props } = usePage();
    const savedArticles = props.savedArticles ?? [];

    const [showPopup, setShowPopup] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const handleUnsave = () => {
        console.log('Artikel dibatalkan penyimpanannya');
    };

    return (
        <>
            <Head title="Artikel Tersimpan" />
            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        onClick={toggleSidebar}
                    >
                        <div
                            className="absolute left-0 top-0 z-50 h-full w-64 bg-white shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <DashboardSidebar onClose={toggleSidebar} />
                        </div>
                    </div>
                )}

                <main className="flex-1 p-4 sm:p-6 md:p-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Artikel Tersimpan' }]}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 rounded-lg bg-white p-6 shadow-sm"
                    >
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Artikel Tersimpan
                        </h1>

                        {savedArticles.length === 0 ? (
                            <p className="text-gray-500">Belum ada artikel yang disimpan.</p>
                        ) : (
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                                {savedArticles.map((article, index) => (
                                    <ArticleCard
                                        key={index}
                                        category={article.category?.name}
                                        title={article.title}
                                        description={article.description}
                                        imageUrl={article.image}
                                        slug={article.slug}
                                        onSave={handleSave}
                                        onUnsave={handleUnsave}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>
        </>
    );
}
