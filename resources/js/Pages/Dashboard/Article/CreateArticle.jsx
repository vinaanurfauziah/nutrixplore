import ArticleDetailCard from '@/Components/Dashboard/Article/ArticleDetailCard';
import ArticleGeneralInfoCard from '@/Components/Dashboard/Article/ArticleGeneralInfoCard';
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
