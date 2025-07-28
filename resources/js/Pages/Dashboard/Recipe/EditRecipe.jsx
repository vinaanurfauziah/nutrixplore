import DashboardNavbar from '@/Components/Dashboard/Navbar';
import RecipeForm from '@/Components/Dashboard/Recipe/RecipeForm';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function EditRecipe({
  resep,
  healthTags = [],
  allergyTags = [],
  nutritionTags = [],
  dietTags = [],
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { data, setData, put, processing, errors } = useForm({
    judul: resep?.judul ?? '',
    slug: resep?.slug ?? '',
    gambar: null,
    kalori: resep.kalori || '',
    durasi: resep.durasi || '',
    cook: resep.cook || '',
    kategori_hidangan: resep.kategori_hidangan || '',
    metode_memasak: resep.metode_memasak || '',
    ingredients: resep?.ingredients ?? [],
    steps: resep?.steps ?? [],
    nutritions: resep?.nutrition ?? [],
    health_tags: resep?.health_tags?.map((t) => t.id) ?? [],
    allergy_tags: resep?.allergy_tags?.map((t) => t.id) ?? [],
    nutrition_tags: resep?.nutrition_tags?.map((t) => t.id) ?? [],
    diet_tags: resep?.diet_tags?.map((t) => t.id) ?? [],
  });

const handleSubmit = (e) => {
  e.preventDefault();
  put(route('dashboard.recipe.update', resep.id), {
    preserveScroll: true,
    onSuccess: () => {
      console.log('✅ Resep berhasil diperbarui');
    },
    onError: (errors) => {
      console.error('❌ Error update:', errors);
    },
  });
};


  if (!resep) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">Memuat data resep...</p>
      </div>
    );
  }

  return (
    <>
      <Head title="Edit Resep" />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar untuk desktop */}
        <aside className="hidden w-64 bg-white shadow-md md:block">
          <DashboardSidebar />
        </aside>

        {/* Sidebar untuk mobile */}
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

        {/* Main Content */}
        <main className="flex-1 px-4 py-4 sm:px-6 md:px-8">
          <DashboardNavbar
            toggleSidebar={toggleSidebar}
            breadcrumbItems={[{ label: 'Edit Resep' }]}
          />

          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Edit Resep</h1>

            <button
              type="submit"
              form="recipe-form"
              className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Update Resep
            </button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <form id="recipe-form" onSubmit={handleSubmit}>
              <RecipeForm
                mode="edit"
                recipeId={resep.id}
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
