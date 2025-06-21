// import SearchBar from '@/Components/SearchBar';
import logo from '@/Assets/logo-nutridapur.png';
import { Link } from '@inertiajs/react';

const Navbar = ({ auth }) => {
    return (
        <nav className="border-gray-200 bg-white px-4 py-2.5 text-lg dark:bg-gray-800 lg:px-6">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="NutriDapur Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        NutriDapur
                    </span>
                </a>
                {/* <div className="hidden md:block">
                    <SearchBar />
                </div> */}

                <div className="flex items-center gap-3 lg:order-2">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-lg border border-[#70B9BE] px-5 py-2.5 text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                            >
                                Masuk
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-lg border border-[#70B9BE] bg-[#70B9BE] px-5 py-2.5 text-lg font-medium text-white hover:bg-transparent hover:text-[#70B9BE] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-transparent dark:hover:text-blue-400 dark:focus:ring-blue-800"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>

                <div
                    className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                    id="mobile-menu-2"
                >
                    <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                        <li>
                            <Link href="/" className="nav-link">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href={route('recipe')} className="nav-link">
                                Resep
                            </Link>
                        </li>
                        <li>
                            <Link href={route('article')} className="nav-link">
                                Artikel
                            </Link>
                        </li>
                        <li>
                            <Link href={route('about')} className="nav-link">
                                Tentang Kami
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
