import DashboardNavbar from '@/Components/Dashboard/Navbar';
import RecipeForm from '@/Components/Dashboard/Recipe/RecipeForm';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function EditRecipe() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { slug } = usePage().props; // Ambil slug dari props Inertia

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Edit Resep" />

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
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Edit Resep' }]}
                    />

                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Edit Resep
                        </h1>

                        <button
                            type="submit"
                            form="recipe-form"
                            className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Update Resep
                        </button>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        {/* ✅ Kirim slug ke RecipeForm */}
                        <RecipeForm mode="edit" slug={slug} />
                    </div>
                </main>
            </div>
        </>
    );
}
