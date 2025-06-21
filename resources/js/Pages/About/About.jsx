import Breadcrumb from '@/Components/Common/Breadcrumb';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

import AboutIntro from '@/Components/Partials/About/AboutIntro';
import AboutJoinCommunity from '@/Components/Partials/About/AboutJoinCommunity';
import FeatureList from '@/Components/Partials/About/FeatureList';

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <Breadcrumb
                    items={[{ label: 'Tentang Kami', href: '/about' }]}
                />

                <main>
                    <AboutIntro />
                    <FeatureList />
                    <AboutJoinCommunity />
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
