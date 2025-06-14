import {
    HiBeaker,
    HiBookOpen,
    HiClipboardList,
    HiCollection,
} from 'react-icons/hi';

const icons = {
    'Total Resep': HiClipboardList,
    'Total Artikel': HiBookOpen,
    'Kategori Resep & Artikel': HiCollection,
    'Total Satuan Takaran': HiBeaker,
};

export default function StatBox({ title, value }) {
    const Icon = icons[title] || HiClipboardList;

    return (
        <div className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
            <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-800">{value}</div>
                <div className="mt-1 text-sm font-medium text-gray-500">
                    {title}
                </div>
            </div>
        </div>
    );
}
