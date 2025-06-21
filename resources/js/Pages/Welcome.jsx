import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

import FaqSection from '@/Components/Partials/Home/FaqSection';
import FeatureSection from '@/Components/Partials/Home/FeatureSection';
import HealthArticleSection from '@/Components/Partials/Home/HealthArticleSection';
import HeroSection from '@/Components/Partials/Home/HeroSection';
import LatestRecipeSection from '@/Components/Partials/Home/LatestRecipeSection';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="nutriDapur" />
            <div className="flex min-h-screen flex-col">
                <header>
                    <Navbar auth={auth} />
                </header>

                <main>
                    <HeroSection />
                    <FeatureSection />
                    <LatestRecipeSection />
                    <HealthArticleSection />
                    <FaqSection />
                </main>

                <Footer className="mt-auto" />
            </div>
        </>
    );
}
