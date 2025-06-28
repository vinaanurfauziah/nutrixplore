import Content from '@/Components/Dashboard/Content';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function Index() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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

<main className="flex-1 px-4 py-4 sm:px-6 md:px-8">
                    {/* Hamburger Menu for Mobile */}
                    <div className="mb-4 flex items-center justify-between md:hidden">
                        <button
                            onClick={toggleSidebar}
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none"
                        >
                            <HiMenuAlt3 className="h-6 w-6" />
                        </button>
                        <h1 className="text-xl font-bold text-gray-800">
                            Dashboard
                        </h1>
                    </div>

                    {/* Heading for Desktop */}
                    <h1 className="mb-4 hidden text-2xl font-bold text-gray-800 md:block">
                        Dashboard
                    </h1>

                    <Content />
                </main>
            </div>
        </>
    );
}
