import Breadcrumb from '@/Components/Common/Breadcrumb';
import DetailHero from '@/Components/Partials/Recipe/DetailHero';
import DetailTabs from '@/Components/Partials/Recipe/DetailTabs';
import RelatedCategories from '@/Components/Partials/Recipe/RelatedCategories';
import ShareSection from '@/Components/Partials/Recipe/ShareSection';
import CommentSection from '@/Components/Public/CommentSection';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

export default function DetailResep({ auth }) {
    return (
        <>
            <Head title="Detail Resep" />
            <div className="">
                <div className="flex min-h-screen flex-col">
                    <header>
                        <Navbar auth={auth} />
                    </header>

                    <Breadcrumb
                        items={[
                            { label: 'Resep', href: '/recipe' },
                            {
                                label: 'Detail Resep',
                                href: '/recipe/detailResep',
                            },
                        ]}
                    />

                    <main className="flex-grow">
                        <DetailHero />
                        <DetailTabs />
                        <RelatedCategories />
                        <ShareSection />

                        <section className="bg-white dark:bg-gray-900">
                            <CommentSection className="mt-auto" />
                        </section>
                    </main>

                    <Footer className="mt-auto" />
                </div>
            </div>
        </>
    );
}
