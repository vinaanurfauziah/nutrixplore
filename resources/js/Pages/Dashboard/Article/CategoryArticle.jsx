import CategoryTable from '@/Components/Dashboard/Article/CategoryTable';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CategoryArticle() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Kategori Artikel" />

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
                    {/* Navbar */}
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Kategori Artikel' }]}
                    />

                    {/* Judul Halaman */}
                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Kategori Artikel
                    </h1>

                    {/* Tabel Kategori */}
                    <CategoryTable />
                </main>
            </div>
        </>
    );
}
