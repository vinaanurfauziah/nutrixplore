import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function EditCategoryArticle({ categoryId }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [name, setName] = useState(categoryId || '');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Simpan kategori: ${name}`);
    };

    return (
        <>
            <Head title="Edit Kategori Artikel" />
            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

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
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[
                            {
                                label: 'Kategori Artikel',
                                href: '/dashboard/article/category',
                            },
                            { label: 'Edit Kategori' },
                        ]}
                    />

                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Edit Kategori Artikel
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-lg bg-white p-6 shadow-sm"
                    >
                        <div className="max-w-lg">
                            <label
                                htmlFor="name"
                                className="mb-1 block font-medium text-gray-700"
                            >
                                Nama Kategori
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded bg-[#70B9BE] px-4 py-2 mt-4 font-semibold text-white hover:bg-[#51979e]"
                        >
                            Simpan Perubahan
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
}
