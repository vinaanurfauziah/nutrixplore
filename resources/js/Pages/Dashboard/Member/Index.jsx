import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import RecipeCard from '@/Components/Public/RecipeCard';
import { Head, Link } from '@inertiajs/react';

const savedRecipes = [
    {
        title: 'Salmon Panggang Lemon',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '/recipe/detailResep',
    },
    {
        title: 'Oatmeal Pisang',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
    {
        title: 'Sop Ayam Jahe',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
    {
        title: 'Sop Ayam Jahe',
        imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png',
        link: '#',
    },
];

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

export default function Index() {
    return (
        <>
            <Head title="Dashboard Member" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 space-y-10 p-6 md:p-8">
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Selamat Datang, Member!
                        </h1>
                        <p className="text-gray-600">
                            Temukan dan simpan resep serta artikel favorit Anda.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Resep Tersimpan
                            </h2>
                            <Link
                                href={route('dashboardMember.saved.recipes')}
                                className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
                            >
                                Lihat Semua
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {savedRecipes.map((recipe, index) => (
                                <RecipeCard
                                    key={index}
                                    title={recipe.title}
                                    imageUrl={recipe.imageUrl}
                                    link={recipe.link}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Artikel Tersimpan
                            </h2>
                            <Link
                                href={route('dashboardMember.saved.articles')}
                                className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
                            >
                                Lihat Semua
                            </Link>
                        </div>
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
