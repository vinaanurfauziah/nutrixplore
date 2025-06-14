import RecipeForm from '@/Components/Dashboard/Recipe/RecipeForm';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function CreateRecipe() {
    return (
        <>
            <Head title="Buat Resep Baru" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Buat Resep Baru
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <RecipeForm />
                    </div>
                </main>
            </div>
        </>
    );
}
