import ArticleTable from '@/Components/Dashboard/Article/ArticleTable';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function ListArticle() {
    return (
        <>
            <Head title="Dashboard Member" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar dengan lebar tetap */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Konten utama fleksibel */}
                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Daftar Artikel
                    </h1>

                    <ArticleTable showTitle={false}/>
                </main>
            </div>
        </>
    );
}
