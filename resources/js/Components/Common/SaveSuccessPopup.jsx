import { Link } from '@inertiajs/react';
import { FaCheckCircle } from 'react-icons/fa';

/**
 * @param {Function} onClose - Fungsi untuk menutup popup
 * @param {string} type - Tipe konten (contoh: 'resep' atau 'artikel')
 * @param {string} [customMessage] - Pesan utama opsional
 * @param {string} [routeName] - Nama route untuk tombol "Lihat"
 */
export default function SaveSuccessPopup({
    onClose,
    type = 'resep',
    customMessage,
    routeName,
}) {
    const defaultMessages = {
        resep: {
            title: 'Resep berhasil disimpan!',
            description:
                'Kamu bisa melihat resep favoritmu kapan saja di halaman simpan.',
            route: 'dashboardMember.saved.recipes',
            button: 'Lihat Resep Saya',
        },
        artikel: {
            title: 'Artikel berhasil disimpan!',
            description:
                'Kamu bisa melihat artikel favoritmu kapan saja di halaman simpan.',
            route: 'dashboardMember.saved.articles',
            button: 'Lihat Artikel Saya',
        },
    };

    const message = defaultMessages[type] || defaultMessages.resep;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="animate-fade-in w-[90%] max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800">
                <div className="mb-4 flex justify-center">
                    <FaCheckCircle className="animate-glow-bounce h-16 w-16 text-green-500" />
                </div>
                <p className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                    {customMessage || message.title}
                </p>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                    {message.description}
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                        Tutup
                    </button>
                    <Link
                        href={route(routeName || message.route)}
                        className="rounded-full bg-[#70B9BE] px-5 py-2 text-sm font-semibold text-white shadow-md transition-shadow hover:bg-[#5fa3a9] hover:shadow-lg"
                    >
                        {message.button}
                    </Link>
                </div>
            </div>
        </div>
    );
}
