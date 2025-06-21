export default function RelatedCategories() {
    const categories = ['Sarapan', 'Diabetes', 'Rendah Kalori', 'Ketogenic'];
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-xl text-xl font-semibold text-gray-900 dark:text-white md:text-2xl lg:mb-8">
                        Kategori yang Relevan
                    </h1>
                    <div className="text-gray-500 dark:text-gray-400">
                        {categories.map((cat, i) => (
                            <a
                                key={i}
                                href="#"
                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-lg font-medium text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                {cat}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
