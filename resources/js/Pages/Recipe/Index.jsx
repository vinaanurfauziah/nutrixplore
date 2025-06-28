import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import RecipeCategorySection from '@/Components/Partials/Recipe/RecipeCategorySection';
import RecipeFilterSection from '@/Components/Partials/Recipe/RecipeFilterSection';
import RecipeHeader from '@/Components/Partials/Recipe/RecipeHeader';
import Footer from '@/Components/Templates/Footer';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Recipe({ auth }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Resep dibatalkan penyimpanannya');
    };

    return (
        <>
            <Head title="Recipe" />
            <div className="relative flex min-h-screen flex-col">
                <RecipeHeader auth={auth} />
                <main>
                    <RecipeCategorySection />
                    <RecipeFilterSection
                        onSave={handleSave}
                        onUnsave={handleUnsave}
                    />
                </main>
                <Footer className="mt-auto" />
                {showPopup && (
                    <SaveSuccessPopup
                        type="resep"
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>
        </>
    );
}
