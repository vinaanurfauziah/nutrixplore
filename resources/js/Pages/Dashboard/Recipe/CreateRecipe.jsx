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
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Buat Resep Baru
                        </h1>

                        <button
                            type="submit"
                            form="recipe-form"
                            className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Simpan Resep
                        </button>
                    </div>

                    <div className="rounded-lg p-6 shadow-sm">
                        <RecipeForm />
                    </div>
                </main>
            </div>
        </>
    );
}
