import CategoryTable from '@/Components/Dashboard/Recipe/CategoryTable';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function CategoryRecipe() {
    return (
        <>
            <Head title="Dashboard Member" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Kategori Resep
                    </h1>

                    <CategoryTable />
                </main>
            </div>
        </>
    );
}
