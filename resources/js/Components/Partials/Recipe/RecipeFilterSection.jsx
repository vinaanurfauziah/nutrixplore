import FilterButton from '@/Components/Common/FilterButton';
import RecipeCard from '@/Components/Public/RecipeCard';
import FilterOptions from '@/data/FilterOptions';
import recipes from '@/data/recipes';

export default function RecipeFilterSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                    FILTER RESEP
                </h5>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                    Gunakan filter untuk menemukan resep yang sesuai dengan
                    kebutuhan dan selera Anda!
                </h2>

                <div className="mb-4 flex flex-wrap gap-2">
                    {Object.entries(FilterOptions)
                        .filter(([label]) => label !== 'Artikel')
                        .map(([label, options], index) => (
                            <FilterButton
                                key={index}
                                text={label}
                                options={options}
                            />
                        ))}
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.title}
                            imageUrl={recipe.imageUrl}
                            link={recipe.link}
                        />
                    ))}
                </div>

                <div className="my-12"></div>

                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.slice(0, 4).map((recipe, index) => (
                        <RecipeCard
                            key={`second-${index}`}
                            title={recipe.title}
                            imageUrl={recipe.imageUrl}
                            link={recipe.link}
                        />
                    ))}
                </div>

                <div className="py-8 text-center text-lg font-extrabold md:text-lg">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-white hover:bg-[#51979e] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Lihat Resep Lainnya
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
