import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import { useState } from 'react'; // ⬅️ ditambahkan

export default function EditSubkategori({ tag }) {
    const { data, setData, put, processing, errors } = useForm({
        name: tag.name || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/dashboard/recipe/category-recipe/${tag.type}/${tag.id}`);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ⬅️ ditambahkan
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // ⬅️ ditambahkan

    return (
        <>
            <Head title={`Edit ${tag.label}`} />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                {/* ⬇️ Sidebar responsif mobile */}
                {isSidebarOpen && ( // ⬅️ ditambahkan
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
                    <DashboardNavbar // ⬅️ ditambahkan
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[
                            {
                                label: 'Kategori Resep',
                                href: `/dashboard/recipe/category-recipe/${tag.type}`,
                            },
                            { label: `Edit ${tag.label}` },
                        ]}
                    />
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Edit {tag.label}
                    </h1>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="max-w-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Nama Subkategori
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300"
                                >
                                    Perbarui Subkategori
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
