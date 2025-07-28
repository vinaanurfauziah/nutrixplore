import { TabItem, Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function TabsDetail({ bahan = [], langkah = [], nutrisi = [] }) {
    return (
        <div className="w-full overflow-x-auto rounded-xl bg-white px-4 pb-4 pt-6 shadow-md dark:bg-gray-800 sm:px-6">
            <Tabs
                aria-label="Tabs resep"
                variant="default"
                className="min-w-[640px] whitespace-nowrap sm:min-w-0"
            >
                {/* Tab Bahan-bahan */}
                <TabItem
                    active
                    title={<span className="text-base font-semibold sm:text-lg">Bahan-bahan</span>}
                    icon={IoDocumentTextOutline}
                >
                    <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:mb-8">
                                Bahan-bahan
                            </h1>
                            <ul className="max-w-full space-y-3 text-base font-normal text-gray-800 dark:text-gray-200 sm:text-lg">
                                {bahan.map((item, i) => (
                                    <li key={item.id || i} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`bahan-${i}`}
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label htmlFor={`bahan-${i}`} className="ms-4">
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {item.jumlah} {item.takaran}
                                            </span>
                                            &nbsp;
                                            <span className="break-words font-normal text-gray-900 dark:text-gray-300">
                                                {item.nama}
                                            </span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </TabItem>

                {/* Tab Langkah-langkah */}
                <TabItem
                    active
                    title={<span className="text-base font-semibold sm:text-lg">Langkah-Langkah</span>}
                    icon={HiClipboardList}
                >
                    <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:mb-8">
                                Langkah-langkah
                            </h1>
                            <ol className="list-decimal space-y-3 pl-4 text-base font-normal text-gray-800 dark:text-gray-200">
                                {langkah
                                    .sort((a, b) => a.urutan - b.urutan)
                                    .map((item, i) => (
                                        <li key={item.id || i}>
                                            <span className="font-semibold">Langkah {item.urutan}:</span> {item.deskripsi}
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    </div>
                </TabItem>

                {/* Tab Nutrisi */}
                <TabItem
                    active
                    title={<span className="text-base font-semibold sm:text-lg">Informasi Nilai Gizi</span>}
                    icon={HiAdjustments}
                >
                    <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-4 lg:gap-8 lg:py-4 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:mb-8">
                                Informasi Nutrisi Per Porsi
                            </h1>
                            <ul className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 text-base font-normal text-gray-800 dark:text-gray-200 sm:grid-cols-2 sm:text-lg">
                                {nutrisi.map((item, i) => (
                                    <li key={item.id || i}>
                                        {item.nama}: {item.jumlah ?? 0} {item.takaran}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </TabItem>
            </Tabs>
        </div>
    );
}
