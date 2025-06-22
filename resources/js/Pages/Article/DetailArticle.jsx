import Breadcrumb from '@/Components/Common/Breadcrumb';
import ShareBox from '@/Components/Common/ShareBox';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

import artikelData from '@/data/artikelData';

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
                                    Oleh{' '}
                                    <span className="font-semibold">
                                        NutriDapur
                                    </span>{' '}
                                    · {article.date} · {article.readTime}
                                </div>
                            </div>
                        </section>

                        {/* Konten */}
                        <section className="bg-white dark:bg-gray-800">
                            <div className="w-full px-4 py-4 lg:px-0">
                                <div className="mx-auto w-full max-w-[680px] text-lg leading-8 text-gray-800 dark:text-gray-300 lg:ml-[calc((100%-680px)/4)]">
                                    {article.content.map((text, i) => (
                                        <p key={i} className="mb-6">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Tag */}
                        <section className="bg-white dark:bg-gray-800">
                            <div className="mx-auto grid max-w-screen-2xl px-4 py-2 lg:grid-cols-12 lg:gap-8 lg:py-2 xl:gap-0">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <div className="text-gray-500 dark:text-gray-400">
                                        {article.tags.map((tag, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-700"
                                            >
                                                {tag}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Share */}
                        <ShareBox label="Bagikan Artikel Ini:" bg="white" />
                    </div>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
