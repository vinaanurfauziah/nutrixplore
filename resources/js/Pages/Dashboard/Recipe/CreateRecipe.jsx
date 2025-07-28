import DashboardNavbar from '@/Components/Dashboard/Navbar';
import RecipeForm from '@/Components/Dashboard/Recipe/RecipeForm';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateRecipe({ healthTags, allergyTags, nutritionTags, dietTags }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { data, setData, post, processing, errors } = useForm({
    judul: '',
    gambar: null,
    durasi: '',
    cook: '',
    kalori: '',
    kategori_hidangan: '',
    metode_memasak: '',
    health_tags: [],
    allergy_tags: [],
    nutrition_tags: [],
    diet_tags: [],
    ingredients: [{ amount: '', unit: '', name: '' }],
    steps: [],
    nutritions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    post(route('recipes.store'), {
      forceFormData: true,
      onSuccess: () => {
        router.get('/dashboard/recipe');
      },
      onError: (errors) => {
        console.error('Error saving recipe:', errors);
      }
    });
  };

  return (
    <>
      <Head title="Buat Resep Baru" />

      <div className="flex min-h-screen bg-gray-100">
        <aside className="hidden w-64 bg-white shadow-md md:block">
          <DashboardSidebar />
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={toggleSidebar}
          >
            <div
              className="absolute left-0 top-0 z-50 h-full w-64 bg-white shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <DashboardSidebar onClose={toggleSidebar} />
            </div>
          </div>
        )}

        <main className="flex-1 px-4 py-4 sm:px-6 md:px-8">
          <DashboardNavbar
            toggleSidebar={toggleSidebar}
            breadcrumbItems={[{ label: 'Buat Resep Baru' }]}
          />

          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Buat Resep Baru</h1>

            <button
              type="submit"
              form="recipe-form"
              className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300"
              disabled={processing}
            >
              Simpan Resep
            </button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <form
              id="recipe-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            
            >
              <RecipeForm
                data={data}
                setData={setData}
                errors={errors}
                healthTags={healthTags}
                allergyTags={allergyTags}
                nutritionTags={nutritionTags}
                dietTags={dietTags}
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
