import TabsDetail from '@/Components/Public/TabsDetail';

export default function DetailTabs({ bahan, langkah, nutrisi }) {
    return (
        <section
            id="detail-resep"
            className="scroll-mt-20 bg-white pt-4 dark:bg-gray-800"
        >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:gap-8 lg:py-8 xl:gap-0">
                <div className="w-full space-y-4">
                    <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                        Detail Resep
                    </h1>
                    <TabsDetail
                        bahan={bahan}
                        langkah={langkah}
                        nutrisi={nutrisi}
                    />
                </div>
            </div>
        </section>
    );
}
