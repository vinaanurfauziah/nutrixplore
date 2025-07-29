import { Link } from '@inertiajs/react';

export default function CategoryCard({ icon, text, href = '#' }) {
    return (
        <li className="w-full list-none">
            <Link
                href={href}
                className="group flex min-h-[160px] w-full flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-6 text-black shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-[#70B9BE] hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-[#5aa3a7]"
            >
                <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>
                <div className="text-center text-lg font-medium">{text}</div>
            </Link>
        </li>
    );
}
