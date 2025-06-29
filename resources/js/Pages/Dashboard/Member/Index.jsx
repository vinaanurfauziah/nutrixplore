import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import ArticleCard from '@/Components/Public/ArticleCard';
import RecipeCard from '@/Components/Public/RecipeCard';
import getAllRecipes from '@/Data/getAllRecipes';
import artikelData from '@/data/artikelData';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Index() {
    const [showPopup, setShowPopup] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const allRecipes = getAllRecipes();
    const latestSavedRecipes = allRecipes.slice(0, 4);
    const latestSavedArticles = artikelData.slice(0, 4);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const handleUnsave = () => {
        console.log('Batal disimpan');
    };

    return (
        <>
            <Head title="Dashboard Member" />
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Desktop */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Sidebar Mobile */}
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

                {/* Main Content */}
                <main className="flex-1 px-4 py-4 sm:px-6 md:px-8">
                    {/* Navbar Mobile */}
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Dashboard Member' }]}
                    />

                    {/* Header Selamat Datang */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 rounded-lg bg-white p-6 shadow-sm"
                    >
                        <h1 className="mb-2 text-2xl font-bold text-gray-800">
                            Selamat Datang, Member!
                        </h1>
                        <p className="text-gray-600">
                            Temukan dan simpan resep serta artikel favorit Anda.
                        </p>
                    </motion.div>

                    {/* Resep Tersimpan */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Resep Tersimpan
                            </h2>
                            <Link
                                href={route('dashboardMember.saved.recipes')}
                                className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                            >
                                Lihat Semua
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                            {latestSavedRecipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.id}
                                    title={recipe.judul}
                                    imageUrl={recipe.gambar}
                                    link={`/recipe/${recipe.kategori}/${recipe.subkategori}/${recipe.slug}`}
                                    kalori={recipe.kalori}
                                    durasi={recipe.durasi}
                                    onSave={handleSave}
                                    onUnsave={handleUnsave}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Artikel Tersimpan */}
                    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Artikel Tersimpan
                            </h2>
                            <Link
                                href={route('dashboardMember.saved.articles')}
                                className="rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#51979e] focus:outline-none focus:ring-4 focus:ring-[#a1d3d7]"
                            >
                                Lihat Semua
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                            {latestSavedArticles.map((article, index) => (
                                <ArticleCard
                                    key={index}
                                    category={article.category}
                                    title={article.title}
                                    description={article.description}
                                    imageUrl={article.imageUrl}
                                    slug={article.slug}
                                    onSave={handleSave}
                                    onUnsave={handleUnsave}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
