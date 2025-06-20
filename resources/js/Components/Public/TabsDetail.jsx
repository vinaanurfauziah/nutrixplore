import { TabItem, Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function TabsDetail() {
    return (
        <Tabs aria-label="Tabs resep" variant="default">
            <TabItem
                active
                title={
                    <span className="text-xl font-semibold">Bahan-bahan</span>
                }
                icon={IoDocumentTextOutline}
            >
                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <div className="">
                            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
                                Bahan-bahan
                            </h1>
                            <ul className="max-w-md space-y-2 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="1-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="1-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                200 g
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                Fillet salmon
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="2-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="2-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                2 sdm
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                air perasan lemon
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="3-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="3-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                2 siung
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                bawang putih, cincang halus
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="4-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="4-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                2 sdt
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                minyak zaitun
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="5-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="5-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                1/4 sdt
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                garam kosher
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="6-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="6-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                1/4 sdt
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                lada hitam
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center ps-3">
                                        <input
                                            id="7-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="h-5 w-5 rounded-sm border-black bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                                        />
                                        <label
                                            htmlFor="7-checkbox"
                                            className="ms-4 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                1/2 buah
                                            </span>
                                            &nbsp;
                                            <span className="font-normal text-gray-900 dark:text-gray-300">
                                                lemon, iris tipis untuk hiasan
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </TabItem>
            <TabItem
                active
                title={
                    <span className="text-xl font-semibold">
                        Langkah-Langkah
                    </span>
                }
                icon={HiClipboardList}
            >
                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
                            Langkah-langkah
                        </h1>
                        <div className="pl-6">
                            <ol className="max-w-none list-outside list-decimal space-y-3 text-black dark:text-gray-400">
                                <li className="pl-2">
                                    Cuci bersih fillet salmon di bawah air
                                    mengalir, lalu keringkan dengan tisu dapur.
                                    Siapkan bahan lainnya seperti bawang putih
                                    yang dicincang halus dan lemon yang sudah
                                    diperas atau diiris.
                                </li>
                                <li className="pl-2">
                                    Letakkan fillet salmon di atas piring atau
                                    wadah datar, kemudian lumuri dengan air
                                    perasan lemon, bawang putih cincang, minyak
                                    zaitun, garam, dan lada hitam. Diamkan
                                    selama 15–30 menit agar bumbu meresap.
                                </li>
                                <li className="pl-2">
                                    Panaskan grill pan atau wajan antilengket
                                    dengan api sedang. Oleskan sedikit minyak
                                    zaitun di permukaannya untuk mencegah salmon
                                    lengket saat dipanggang.
                                </li>
                                <li className="pl-2">
                                    Letakkan fillet salmon di atas wajan dengan
                                    sisi kulit menghadap ke bawah (jika ada
                                    kulit). Panggang selama 4–5 menit hingga
                                    bagian bawah kecokelatan dan kulitnya
                                    renyah. Balik salmon dengan hati-hati
                                    menggunakan spatula, lalu panggang sisi
                                    lainnya selama 3–4 menit.
                                </li>
                                <li className="pl-2">
                                    Angkat salmon yang telah matang dan letakkan
                                    di piring saji. Tambahkan irisan lemon di
                                    atas salmon sebagai hiasan untuk menambah
                                    tampilan dan aroma yang segar.
                                </li>
                                <li className="pl-2">
                                    Sajikan salmon grilled dengan pelengkap
                                    seperti nasi hangat, kentang panggang, atau
                                    sayuran sesuai selera, lalu hidangkan selagi
                                    hangat.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </TabItem>
            <TabItem
                active
                title={
                    <span className="text-xl font-semibold">
                        Informasi Nilai Gizi
                    </span>
                }
                icon={HiAdjustments}
            >
                <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-4 lg:gap-8 lg:py-4 xl:gap-0">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
                            Informasi Nutrisi Per Porsi
                        </h1>
                        <p className="mb-4 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400 md:text-xl lg:mb-8">
                            {' '}
                            Ukuran Per porsi:
                            <span className="font-semibold text-gray-900 dark:text-white">
                                &nbsp;1 Salmon
                            </span>
                        </p>
                        <ul className="grid max-w-2xl list-inside list-decimal grid-cols-2 gap-x-8 space-y-1 text-gray-500 dark:text-gray-400">
                            {/* 1-5 */}
                            <li className="flex items-center">
                                Kalori:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;320 kcal
                                </span>
                            </li>
                            <li className="flex items-center">
                                Protein:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;35 g
                                </span>
                            </li>
                            <li className="flex items-center">
                                Total Lemak:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;20 g
                                </span>
                            </li>
                            <li className="flex items-center">
                                Lemak Tak Jenuh:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;15 g
                                </span>
                            </li>
                            <li className="flex items-center">
                                Lemak Jenuh:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;3 g
                                </span>
                            </li>
                            {/* 6-10 */}
                            <li className="flex items-center">
                                Karbohidrat:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;1 g
                                </span>
                            </li>
                            <li className="flex items-center">
                                Serat:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;0 g
                                </span>
                            </li>
                            <li className="flex items-center">
                                Kolesterol:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;70 mg
                                </span>
                            </li>
                            <li className="flex items-center">
                                Sodium (Garam):
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;300 mg
                                </span>
                            </li>
                            <li className="flex items-center">
                                Asam Lemak Omega-3:
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    &nbsp;3 g
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </TabItem>
        </Tabs>
    );
}
