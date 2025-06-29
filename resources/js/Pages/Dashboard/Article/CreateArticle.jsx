import ArticleDetailCard from '@/Components/Dashboard/Article/ArticleDetailCard';
import ArticleGeneralInfoCard from '@/Components/Dashboard/Article/ArticleGeneralInfoCard';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateArticle() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Buat Artikel Baru" />

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
                        breadcrumbItems={[{ label: 'Buat Artikel Baru' }]}
                    />

                    {/* Header dan Tombol */}
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Buat Artikel Baru
                        </h1>
                        <button
                            type="submit"
                            form="article-form"
                            id="article-form"
                            className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Simpan Artikel
                        </button>
                    </div>

                    {/* Konten Form */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-1">
                            <ArticleGeneralInfoCard />
                        </div>

                        <div className="lg:col-span-2">
                            <ArticleDetailCard />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
