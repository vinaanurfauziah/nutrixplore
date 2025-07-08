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
        </form>
    );
}
