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
        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                <Icon className="h-8 w-8 text-[#70B9BE]" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-800">{value}</h3>
                <p className="text-base text-gray-500">{title}</p>
            </div>
        </div>
    );
}
