import Breadcrumb from '@/Components/Common/Breadcrumb';
import ShareBox from '@/Components/Common/ShareBox';
import TagList from '@/Components/Common/TagList';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';
import artikelData from '@/data/artikelData.js'; 

export default function DetailArticle({ auth, slug }) {
    const article = artikelData.find((item) => item.slug === slug);

    if (!article) {
        return (
            <>
                <Head title="Artikel Tidak Ditemukan" />
                <Navbar auth={auth} />
                <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
                    <h1 className="text-xl font-bold text-red-600">
                        Artikel tidak ditemukan.
                    </h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Head title={article.title} />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />

                <Breadcrumb
                    items={[
                        { label: 'Artikel', href: '/article' },
                        {
                            label: article.title,
                            href: `/article/${article.slug}`,
                        },
                    ]}
                />

                <main className="flex-grow px-4 lg:px-0">
                    <div className="mx-auto max-w-3xl space-y-12">
                        {/* Judul dan metadata */}
                        <section className="bg-white dark:bg-gray-800">
                            <div className="w-full max-w-[680px] px-4 pt-10 lg:ml-[calc((100%-680px)/4)]">
                                <h1 className="mb-5 text-4xl font-extrabold leading-snug text-gray-900 dark:text-white md:text-5xl">
                                    {article.title}
                                </h1>
                                <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                                    {article.date}
                                </div>
                            </div>
                        </section>

                        {/* Konten */}
                        <section className="bg-white dark:bg-gray-800">
                            <div className="w-full px-4 py-4 lg:px-0">
                                <div className="mx-auto w-full max-w-[680px] text-lg leading-8 text-gray-800 dark:text-gray-300">
                                    {article.content.map((text, i) => (
                                        <p key={i} className="mb-6">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Tag */}
                        <TagList
                            tags={article.tags.map((tag) => ({
                                label: tag,
                                href: `/article?tags=${encodeURIComponent(tag)}`,
                            }))}
                            title="Topik Terkait"
                            animated={false}
                        />

                        {/* Share */}
                        <ShareBox label="Bagikan Artikel Ini:" bg="white" />
                    </div>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
