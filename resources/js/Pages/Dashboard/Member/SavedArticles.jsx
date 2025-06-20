import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import RecipeCard from '@/Components/Public/RecipeCard';
import { Head } from '@inertiajs/react';

const savedArticles = [
    {
        title: 'Panduan Pola Makan Sehat untuk Anak',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '/article/detailArticle',
    },
    {
        title: 'Tips Mengurangi Gula Harian',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
    {
        title: 'Manfaat Serat untuk Pencernaan',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
    {
        title: 'Manfaat Serat untuk Pencernaan',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
];

export default function SavedArticles() {
    return (
        <>
            <Head title="Artikel Tersimpan" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Artikel Tersimpan
                        </h1>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {savedArticles.map((article, index) => (
                                <RecipeCard
                                    key={index}
                                    title={article.title}
                                    imageUrl={article.imageUrl}
                                    link={article.link}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
