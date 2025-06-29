import DashboardNavbar from '@/Components/Dashboard/Navbar';
import RecipeTable from '@/Components/Dashboard/Recipe/RecipeTable';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function ListRecipe() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Daftar Resep" />

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

                <main className="max-w-full flex-1 overflow-x-hidden px-4 py-4 sm:px-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Daftar Resep' }]}
                    />

                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Daftar Resep
                    </h1>

                    <div className="max-h-[70vh] overflow-auto rounded-lg shadow">
                        <RecipeTable showTitle={false} />
                    </div>
                </main>
            </div>
        </>
    );
}
