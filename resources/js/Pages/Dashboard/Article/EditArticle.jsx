import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import artikelData from '@/data/artikelData';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function EditArticle({ slug }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const article = artikelData.find((item) => item.slug === slug);

    const { data, setData, put, processing, errors } = useForm({
        title: article?.title || '',
        description: article?.description || '',
        category: article?.category || '',
        content: article?.content?.join('\n\n') || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulasi update. Nanti ganti dengan PUT request ke backend
        alert(`Artikel "${data.title}" berhasil disimpan (simulasi)`);
        console.log('Data artikel yang disimpan:', data);
        // Contoh jika ada backend:
        // put(route('dashboard.article.update', slug), { preserveScroll: true });
    };

    if (!article) {
        return (
            <div className="p-4 text-center text-red-600">
                Artikel tidak ditemukan.
            </div>
        );
    }

    return (
        <>
            <Head title={`Edit: ${article.title}`} />

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
                <main className="flex-1 px-4 py-4 sm:px-6 md:px-8">
                    <DashboardNavbar
                        toggleSidebar={toggleSidebar}
                        breadcrumbItems={[
                            {
                                label: 'Daftar Artikel',
                                href: '/dashboard/article',
                            },
                            { label: 'Edit Artikel' },
                        ]}
                    />

                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Edit Artikel
                        </h1>
                        <button
                            type="submit"
                            form="edit-article-form"
                            className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e]"
                        >
                            Simpan Perubahan
                        </button>
                    </div>

                    <form
                        id="edit-article-form"
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded bg-white p-6 shadow md:max-w-3xl"
                    >
                        <div>
                            <label className="mb-1 block font-semibold text-gray-700">
                                Judul Artikel
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-1 block font-semibold text-gray-700">
                                Deskripsi
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                rows={2}
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-1 block font-semibold text-gray-700">
                                Kategori
                            </label>
                            <input
                                type="text"
                                value={data.category}
                                onChange={(e) =>
                                    setData('category', e.target.value)
                                }
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-1 block font-semibold text-gray-700">
                                Konten
                            </label>
                            <textarea
                                value={data.content}
                                onChange={(e) =>
                                    setData('content', e.target.value)
                                }
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#70B9BE] focus:ring-[#70B9BE]"
                                rows={10}
                                required
                            />
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
