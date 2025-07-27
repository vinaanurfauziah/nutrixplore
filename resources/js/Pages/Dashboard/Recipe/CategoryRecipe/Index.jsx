import DashboardNavbar from '@/Components/Dashboard/Navbar';
import SubcategoryTable from '@/Components/Dashboard/Recipe/SubcategoryTable';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { flash = {}, errors = {} } = usePage().props;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Subkategori Resep" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* Sidebar Mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        onClick={toggleSidebar}
                    >
                        <div
                            className="absolute left-0 top-0 z-50 h-full w-64 bg-white shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <DashboardSidebar onClose={toggleSidebar} />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 px-4 py-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Subkategori Resep' }]}
                    />

                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Subkategori Resep
                    </h1>

                    {/* Flash Success */}
                    {flash?.success && (
                        <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-800">
                            {flash.success}
                        </div>
                    )}

                    {/* Flash Error */}
                    {flash?.error && (
                        <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-800">
                            {flash.error}
                        </div>
                    )}

                    {/* Validation Message */}
                    {errors?.message && (
                        <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-800">
                            {errors.message}
                        </div>
                    )}

                    {/* Tabel Subkategori */}
                    <SubcategoryTable />
                </main>
            </div>
        </>
    );
}
