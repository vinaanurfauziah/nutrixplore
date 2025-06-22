// resources/js/Pages/Recipe/DetailResep.jsx
import Breadcrumb from '@/Components/Common/Breadcrumb';
import ShareBox from '@/Components/Common/ShareBox';
import DetailHero from '@/Components/Partials/Recipe/DetailHero';
import DetailTabs from '@/Components/Partials/Recipe/DetailTabs';
import RelatedCategories from '@/Components/Partials/Recipe/RelatedCategories';
import CommentSection from '@/Components/Public/CommentSection';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

export default function DetailResep({ auth, kategori, subkategori, slug }) {
    return (
        <>
            <Head title={slug.replace(/-/g, ' ')} />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />

                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        { label: kategori, href: `/recipe/${kategori}` },
                        {
                            label: subkategori,
                            href: `/recipe/${kategori}/${subkategori}`,
                        },
                        { label: slug.replace(/-/g, ' '), href: '#' },
                    ]}
                />

                <main className="flex-grow">
                    <DetailHero slug={slug} />
                    <DetailTabs />
                    <RelatedCategories />
                    <ShareBox label="Bagikan Resep Ini:" bg="gray" />

                    <section className="bg-white dark:bg-gray-900">
                        <CommentSection className="mt-auto" />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
