import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateCategoryArticle() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.article.category.store'));
    };

    return (
        <>
            <Head title="Tambah Kategori Artikel" />
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

                <main className="flex-1 p-6 md:p-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[
                            {
                                label: 'Kategori Artikel',
                                href: '/dashboard/article/category',
                            },
                            { label: 'Tambah Kategori' },
                        ]}
                    />

                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Tambah Kategori Artikel
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
