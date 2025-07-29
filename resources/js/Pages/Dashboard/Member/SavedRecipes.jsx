import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import RecipeCard from '@/Components/Public/RecipeCard';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import { Head, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SavedRecipes({ savedRecipes = [] }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSave = (recipeId) => {
        router.post(`/recipes/save/${recipeId}`, {}, {
            onSuccess: () => {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            },
            onError: (error) => {
                alert('Gagal menyimpan resep');
                console.error(error);
            }
        });
    };

    const handleUnsave = (recipeId) => {
        router.post(`/recipes/unsave/${recipeId}`, {}, {
            onSuccess: () => {
                console.log('Resep dihapus dari daftar simpan');
                // Optional: bisa refresh data atau redirect
            },
            onError: (error) => {
                alert('Gagal unsave resep');
                console.error(error);
            }
        });
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

                        {savedRecipes.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                                {savedRecipes.map((recipe) => (
                                    <RecipeCard
                                          key={recipe.id}
    title={recipe.judul}
    imageUrl={recipe.gambar}
    link={`/recipe/${recipe.slug}`}
    kalori={recipe.kalori}
    durasi={recipe.durasi}
    onSave={() => handleSave(recipe.id)}
    onUnsave={() => handleUnsave(recipe.id)}
    isSaved = {true}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">Belum ada resep yang disimpan.</p>
                        )}
                    </motion.div>
                </main>
            </div>

            {showPopup && <SaveSuccessPopup />}
        </>
    );
}
