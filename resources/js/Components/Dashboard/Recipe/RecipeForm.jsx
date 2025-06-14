import RecipeDetailCard from './RecipeDetailCard';
import RecipeGeneralInfoCard from './RecipeGeneralInfoCard';

export default function RecipeForm({ defaultData = null }) {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
            <RecipeGeneralInfoCard defaultData={defaultData} />
            <RecipeDetailCard defaultData={defaultData} />

            <div className="col-span-2">
                <button
                    type="submit"
                    className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                >
                    Simpan Resep
                </button>
            </div>
        </form>
    );
}
