import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import RecipeCard from '@/Components/Public/RecipeCard';
import getAllRecipes from '@/Data/getAllRecipes';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SavedRecipes() {
    const [showPopup, setShowPopup] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const allRecipes = getAllRecipes();
    const savedRecipes = allRecipes.slice(0, 8);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const handleUnsave = () => {
        console.log('Batal disimpan');
    };

    return (
        <>
            <Head title="Resep Tersimpan" />
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
                        breadcrumbItems={[{ label: 'Resep Tersimpan' }]}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 rounded-lg bg-white p-6 shadow-sm"
                    >
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Resep Tersimpan
                        </h1>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                            {savedRecipes.map((recipe) => (
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
                    </motion.div>
                </main>
            </div>
        </>
    );
}
