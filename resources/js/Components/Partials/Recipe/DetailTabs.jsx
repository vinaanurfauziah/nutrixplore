import TabsDetail from '@/Components/Public/TabsDetail';

export default function DetailTabs() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
                        Detail Resep
                    </h1>
                    <TabsDetail />
                </div>
            </div>
        </section>
    );
}