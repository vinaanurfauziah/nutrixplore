  import IngredientCard from './IngredientCard';
  import NutritionCard from './NutritionCard';
  import RecipeGeneralInfoCard from './RecipeGeneralInfoCard';
  import StepCard from './StepCard';
  import { useForm } from '@inertiajs/react';
  import { useEffect } from 'react';

  export default function RecipeForm({
    data: externalData,
    setData: externalSetData,
    errors: externalErrors,
    defaultData = null,
    healthTags = [],
    allergyTags = [],
    nutritionTags = [],
    dietTags = [],
  }) {
    useEffect(() => {
      console.log('🔍 Default Data:', defaultData);
    }, [defaultData]);

    // Gunakan useForm jika form ini self-contained
    const form = useForm({
      judul: defaultData?.judul ?? '',
      slug: defaultData?.slug ?? '',
      gambar: defaultData?.gambar ?? null,
      total_kalori: defaultData?.total_kalori ?? '',
      durasi: defaultData?.durasi ?? '',
      porsi: defaultData?.porsi ?? '',
      kategori_hidangan: defaultData?.kategori?? '',
      metode_memasak: defaultData?.metode ?? '',
      ingredients: Array.isArray(defaultData?.ingredients) ? defaultData.ingredients : [],
      steps: Array.isArray(defaultData?.steps) ? defaultData.steps : [],
      nutritions: Array.isArray(defaultData?.nutritions) ? defaultData.nutritions : [],
      health_tags: Array.isArray(defaultData?.health_tags) ? defaultData.health_tags : [],
      allergy_tags: Array.isArray(defaultData?.allergy_tags) ? defaultData.allergy_tags : [],
      nutrition_tags: Array.isArray(defaultData?.nutrition_tags) ? defaultData.nutrition_tags : [],
      diet_tags: Array.isArray(defaultData?.diet_tags) ? defaultData.diet_tags : [],
    });

    const data = externalData ?? form.data;
    const setData = externalSetData ?? form.setData;
    const errors = externalErrors ?? form.errors;

    useEffect(() => {
      console.log('🧾 Form Data:', data);
      console.log('❗️Form Errors:', errors);
    }, [data, errors]);

    const handleIngredientsChange = (newIngredients) => {
      const formatted = newIngredients.map((item) => ({
        jumlah: item.jumlah ?? '',
        takaran: item.takaran ?? 'gram',
        nama: item.nama ?? '',
      }));
      setData('ingredients', formatted);
    };

    const handleStepsChange = (newSteps) => {
      const formatted = newSteps.map((item) => ({
        deskripsi: item.deskripsi ?? '',
      }));
      setData('steps', formatted);
    };

    const handleNutritionsChange = (newNutritions) => {
      const formatted = newNutritions.map((item) => ({
        jumlah: item.jumlah ?? '',
        takaran: item.takaran ?? 'gram',
        nama: item.nama ?? '',
      }));
      setData('nutritions', formatted);
    };

    return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Kolom Kiri */}
      <div className="space-y-6">
        <RecipeGeneralInfoCard
          data={data}
          setData={setData}
          errors={errors}
          defaultData={defaultData}
          healthTags={healthTags}
          allergyTags={allergyTags}
          nutritionTags={nutritionTags}
          dietTags={dietTags}
        />
      </div>

      {/* Kolom Kanan */}
      <div className="space-y-6">
        <IngredientCard
          ingredients={
            Array.isArray(data.ingredients) && data.ingredients.length > 0
              ? data.ingredients
              : [{ jumlah: '', takaran: 'gram', nama: '' }]
          }
          setIngredients={handleIngredientsChange}
          errors={errors}
        />

        <StepCard
          steps={
            Array.isArray(data.steps) && data.steps.length > 0
              ? data.steps
              : [{ deskripsi: '' }]
          }
          setSteps={handleStepsChange}
          errors={errors}
        />

        <NutritionCard
          nutritions={
            Array.isArray(data.nutritions) && data.nutritions.length > 0
              ? data.nutritions
              : [{ jumlah: '', takaran: 'gram', nama: '' }]
          }
          setNutritions={handleNutritionsChange}
          errors={errors}
        />
      </div>
    </div>
  );
  }