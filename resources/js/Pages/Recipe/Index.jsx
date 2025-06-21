import RecipeCategorySection from '@/Components/Partials/Recipe/RecipeCategorySection';
import RecipeFilterSection from '@/Components/Partials/Recipe/RecipeFilterSection';
import RecipeHeader from '@/Components/Partials/Recipe/RecipeHeader';
import Footer from '@/Components/Templates/Footer';
import { Head } from '@inertiajs/react';

export default function Recipe({ auth }) {
    return (
        <>
            <Head title="Recipe" />
            <div className="flex min-h-screen flex-col">
                <RecipeHeader auth={auth} />
                <main>
                    <RecipeCategorySection />
                    <RecipeFilterSection />
                </main>
                <Footer className="mt-auto" />
            </div>
        </>
    );
}
