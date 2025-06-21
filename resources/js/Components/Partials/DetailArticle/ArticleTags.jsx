export default function ArticleTags() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="text-gray-500 dark:text-gray-400">
                        {['Sarapan', 'Diabetes'].map((tag, i) => (
                            <a
                                key={i}
                                href="#"
                                className="mr-3 inline-flex items-center justify-center rounded-3xl bg-[#70B9BE] px-5 py-2 text-center text-lg font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-700"
                            >
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
