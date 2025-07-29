import Content from '@/Components/Dashboard/Content';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ auth }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const { 
        totalResep, 
        totalArtikel, 
        recipes, 
        articles, 
        kategoriHidangan, 
        metodeMemasak, 
        healthTags, 
        allergyTags, 
        nutritionTags, 
        dietTags 
    } = usePage().props;

    const user = auth?.user;
    const isAdmin = user?.role === 'admin';

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Desktop */}
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
                <main className="max-w-full flex-1 overflow-x-hidden px-4 py-4 sm:px-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[{ label: 'Dashboard Admin' }]}
                    />

                    {isAdmin ? (
                        <Content
                            totalResep={totalResep}
                            totalArtikel={totalArtikel}
                            recipes={recipes}
                            articles={articles}
                            kategoriHidangan={kategoriHidangan}
                            metodeMemasak={metodeMemasak}
                            healthTags={healthTags}
                            allergyTags={allergyTags}
                            nutritionTags={nutritionTags}
                            dietTags={dietTags}
                        />
                    ) : (
                        <div className="text-center text-gray-600">
                            Kamu tidak punya akses ke halaman ini.
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}
