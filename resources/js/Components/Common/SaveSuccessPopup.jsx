import { Link } from '@inertiajs/react';

export default function SaveSuccessPopup({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="animate-fade-in-up w-[90%] max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800">
                <p className="mb-4 text-center text-lg font-semibold text-gray-800 dark:text-white">
                    ✅ Resep berhasil disimpan!
                </p>
                <div className="mt-4 flex justify-center gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                        Tutup
                    </button>
                    <Link
                        href={route('dashboardMember.saved.recipes')}
                        className="rounded-lg bg-[#70B9BE] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5fa3a9]"
                    >
                        Lihat di sini
                    </Link>
                </div>
            </div>
        </div>
    );
}
