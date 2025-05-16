import { Link } from '@inertiajs/react';

export default function CategoryCard({ icon, text, href = '#' }) {
    return (
        <li>
            <Link
                href={href}
                className="flex flex-col items-center justify-center rounded-lg px-6 py-4 text-black hover:bg-[#70B9BE] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
                {icon}
                <div className="mt-4 whitespace-nowrap text-center text-lg font-normal">
                    {text}
                </div>
            </Link>
        </li>
    );
}
