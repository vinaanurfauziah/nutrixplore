import ArticleGeneralInfoCard from '@/Components/Dashboard/Article/ArticleGeneralInfoCard';
import ArticleDetailCard from '@/Components/Dashboard/Article/ArticleDetailCard';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function CreateArticle() {
    return (
        <>
            <Head title="Buat Artikel Baru" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Buat Artikel Baru
                    </h1>

                    {/* Grid 2 kolom */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Kiri: Informasi Umum (1/3) */}
                        <div className="lg:col-span-1">
                            <ArticleGeneralInfoCard />
                        </div>

                        {/* Kanan: Konten Artikel (2/3) */}
                        <div className="lg:col-span-2">
                            <ArticleDetailCard />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
