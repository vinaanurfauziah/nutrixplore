// resources/js/Pages/Recipe/Index.jsx
import { useState } from 'react';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import RecipeFilterSection from '@/Components/Partials/Recipe/RecipeFilterSection';
import RecipeCategorySection from '@/Components/Partials/Recipe/RecipeCategorySection';
import Footer from '@/Components/Templates/Footer';
import { Head } from '@inertiajs/react';

export default function Recipe({ auth }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        // ❌ Tidak perlu popup, tapi bisa ditambah toast kalau mau
        console.log('Resep dibatalkan penyimpanannya');
    };

    return (
        <>
            <Head title="Recipe" />
            <div className="relative flex min-h-screen flex-col">
                <RecipeCategorySection />
                <main>
                    <RecipeFilterSection onSave={handleSave} onUnsave={handleUnsave} />
                </main>
                <Footer className="mt-auto" />
                {showPopup && <SaveSuccessPopup onClose={() => setShowPopup(false)} />}
            </div>
        </>
    );
}
