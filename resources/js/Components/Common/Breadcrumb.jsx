import { Link } from '@inertiajs/react';

const Breadcrumb = ({ items }) => {
    return (
        <nav
            className="border-gray-200 bg-white px-4 py-4 text-sm dark:bg-gray-800 sm:text-base"
            aria-label="Breadcrumb"
        >
            <div className="mx-auto max-w-screen-2xl">
                <ol className="flex flex-wrap items-center overflow-x-auto whitespace-nowrap text-gray-700 dark:text-gray-200">
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center hover:text-[#70B9BE]"
                        >
                            <svg
                                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Beranda
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <svg
                                className="mx-2 h-4 w-4 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-[#70B9BE]"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-500 dark:text-gray-400">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;
