import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import ArticleDetailCard from '@/Components/Dashboard/Article/ArticleDetailCard';
import ArticleGeneralInfoCard from '@/Components/Dashboard/Article/ArticleGeneralInfoCard';
import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';

export default function EditArticle({ article, categories }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const { data, setData, put, processing, errors } = useForm({
        image: null,
        title: article?.title || '',
        slug: article?.slug || '',
        short_description: article?.short_description || '',
        category_id: article?.category?.id || '',
        content: article?.content || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('dashboard.article.update', article.slug), {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                alert(`Artikel "${data.title}" berhasil diperbarui.`);
            },
        });
    };

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
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
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
                            { label: 'Daftar Artikel', href: route('dashboard.article.list') },
                            { label: 'Edit Artikel' },
                        ]}
                    />

                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">Edit Artikel</h1>
                        <button
                            type="submit"
                            form="article-form"
                            disabled={processing}
                            className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] disabled:opacity-50"
                        >
                            Simpan Perubahan
                        </button>
                    </div>

                    <form id="article-form" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <ArticleGeneralInfoCard
                                    data={data || {}} // 🛡 Proteksi jika data belum siap
                                    setData={setData}
                                    errors={errors}
                                    categories={categories}
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <ArticleDetailCard
                                    value={data.content || ''}
                                    onChange={(val) => setData('content', val)}
                                    error={errors.content}
                                />
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
