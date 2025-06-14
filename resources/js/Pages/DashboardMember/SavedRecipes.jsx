import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import RecipeCard from '@/Components/RecipeCard';
import { Head } from '@inertiajs/react';

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

export default function SavedRecipes() {
    return (
        <>
            <Head title="Resep Tersimpan" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Resep Tersimpan
                        </h1>

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
                </main>
            </div>
        </>
    );
}
