import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

import articles from '@/data/articles';
import FilterOptions from '@/data/FilterOptions';

import ArticleFilter from '@/Components/Partials/Article/ArticleFilter';
import ArticleGrid from '@/Components/Partials/Article/ArticleGrid';
import ArticleIntro from '@/Components/Partials/Article/ArticleIntro';
import ArticleMoreButton from '@/Components/Partials/Article/ArticleMoreButton';

export default function Article({ auth }) {
    const artikelOptions = FilterOptions.Artikel || [];

    return (
        <>
            <Head title="Article" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <Breadcrumb items={[{ label: 'Artikel', href: '/article' }]} />

                <main>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                            <ArticleIntro />
                            <ArticleFilter options={artikelOptions} />
                            <ArticleGrid articles={articles} />
                            <ArticleGrid articles={articles} duplicate />
                            <ArticleMoreButton />
                        </div>
                    </section>
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
