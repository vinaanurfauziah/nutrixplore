import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

import ArticleContent from '@/Components/Partials/DetailArticle/ArticleContent';
import ArticleHeader from '@/Components/Partials/DetailArticle/ArticleHeader';
import ArticleShare from '@/Components/Partials/DetailArticle/ArticleShare';
import ArticleTags from '@/Components/Partials/DetailArticle/ArticleTags';

export default function DetailArticle({ auth }) {
    return (
        <>
            <Head title="Detail Artikel" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <div>
                    <Breadcrumb
                        items={[
                            { label: 'Article', href: '/article' },
                            {
                                label: 'Detail Artikel',
                                href: '/article/detailArticle',
                            },
                        ]}
                    />
                </div>

                <main className="flex-grow">
                    <ArticleHeader />
                    <ArticleContent />
                    <ArticleTags />
                    <ArticleShare />
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
