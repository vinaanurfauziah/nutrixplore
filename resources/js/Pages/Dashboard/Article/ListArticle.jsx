import ArticleTable from '@/Components/Dashboard/Article/ArticleTable';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ListArticle() {
    const { articles = [] } = usePage().props; // ✅ from controller
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <Head title="Daftar Artikel" />
            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <div
                            className="absolute left-0 top-0 z-50 h-full w-64 bg-white shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <DashboardSidebar onClose={() => setIsSidebarOpen(false)} />
                        </div>
                    </div>
                )}

                <main className="max-w-full flex-1 overflow-x-hidden px-4 py-4 sm:px-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                        breadcrumbItems={[{ label: 'Daftar Artikel' }]}
                    />

                    <h1 className="mb-4 text-2xl font-bold text-gray-800">Daftar Artikel</h1>
                    <div className="max-h-[70vh] overflow-auto rounded-lg shadow">
                        <ArticleTable articles={articles} showTitle={false} />
                    </div>
                </main>
            </div>
        </>
    );
}
