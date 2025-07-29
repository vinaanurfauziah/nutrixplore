    import MoreButton from '@/Components/Common/MoreButton';
    import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
    import SectionHeading from '@/Components/Common/SectionHeading';
    import RecipeCard from '@/Components/Public/RecipeCard';
    import getAllRecipes from '@/Data/getAllRecipes';
    import { useState } from 'react';
    import { router } from '@inertiajs/react';

  export default function LatestRecipeSection({ auth , recipes = [] }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleSave = (recipeId) => {
    router.post(`/recipes/save/${recipeId}`, {}, {
        onSuccess: () => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        },
        onError: (error) => {
            alert('Gagal menyimpan resep');
            console.error(error);
        }
    });
};

const handleUnsave = (recipeId) => {
    router.post(`/recipes/unsave/${recipeId}`, {}, {
        onSuccess: () => {
            console.log('Resep dihapus dari daftar simpan');
        },
        onError: (error) => {
            alert('Gagal unsave resep');
            console.error(error);
        }
    });
};


    

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <div>
                    <SectionHeading
                        subtitle="RESEP TERBARU"
                        title="Lihatlah resep terbaru kami dan temukan resep favorit baru."
                    />
                </div>

                <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.judul}
                            imageUrl={recipe.gambar}
                            link={`/recipe/${recipe.slug}`}
                            kalori={recipe.kalori}
                            durasi={recipe.durasi}
                             onSave={() => handleSave(recipe.id)}
                             onUnsave={() => handleUnsave(recipe.id)}
                            isSaved={true}
                        />
                    ))}

                    {showPopup && (
                        <SaveSuccessPopup onClose={() => setShowPopup(false)} />
                    )}
                </div>

                <div className="mt-10 text-center">
                    <MoreButton href="/recipe" text="Lihat Resep Lainnya" />
                </div>
            </div>
        </section>
    );
}