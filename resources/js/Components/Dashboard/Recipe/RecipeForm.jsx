// resources/js/Components/Dashboard/Recipe/RecipeForm.jsx
import { useState } from 'react';
import IngredientCard from './IngredientCard';
import NutritionCard from './NutritionCard';
import RecipeGeneralInfoCard from './RecipeGeneralInfoCard';
import StepCard from './StepCard';

export default function RecipeForm({ defaultData = null }) {
    const [ingredients, setIngredients] = useState([
        { amount: '', unit: 'gram', name: '' },
    ]);
    const [steps, setSteps] = useState(['']);

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
            {/* Kolom Kiri */}
            <div className="space-y-6">
                <RecipeGeneralInfoCard defaultData={defaultData} />
            </div>

            {/* Kolom Kanan */}
            <div className="space-y-6">
                <IngredientCard
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                />
                <StepCard steps={steps} setSteps={setSteps} />
                <NutritionCard />
            </div>

            {/* Tombol Simpan */}
            {/* <div className="col-span-2 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Simpan Resep
                </button>
            </div> */}
        </form>
    );
}
