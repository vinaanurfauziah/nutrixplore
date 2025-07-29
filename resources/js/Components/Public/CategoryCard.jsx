import { Link } from '@inertiajs/react';

export default function CategoryCard({ icon, text, href  }) {
    return (
        <li className="w-full">
            <Link
                href={href}
                className="flex h-full flex-col items-center justify-center rounded-lg px-4 py-4 text-black hover:bg-[#70B9BE] hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:px-6 sm:py-6"
            >
                {icon}
                <div className="mt-4 whitespace-nowrap text-center text-lg font-normal">
                    {text}
                </div>
            </Link>
        </li>
    );
}
