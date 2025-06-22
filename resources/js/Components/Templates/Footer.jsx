import logo from '@/Assets/logo-nutridapur.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 sm:p-6">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-8"
                                alt="NutriDapur Logo"
                            />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
                                NutriDapur
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-4 gap-6 font-semibold sm:grid-cols-4 sm:gap-2">
                        {[
                            {
                                links: ['Resep'],
                                urls: [route('recipe')],
                            },
                            {
                                links: ['Filter'],
                                urls: [[route('recipe')]],
                            },
                            {
                                links: ['Artikel'],
                                urls: [route('article')],
                            },
                            {
                                links: ['Tentang Kami'],
                                urls: [route('about')],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                    {section.title}
                                </h2>
                                <ul className="text-[#697077] dark:text-gray-400">
                                    {section.links.map((link, idx) => (
                                        <li key={idx} className="mb-4">
                                            <a
                                                href={section.urls[idx]}
                                                className="hover:underline"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-[#697077] dark:border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#697077] dark:text-gray-400 sm:text-center">
                        © 2025{' '}
                        <a href="/" className="hover:underline">
                            NutriDapur™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <a
                            href="#"
                            className="text-[#697077] hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[#697077] hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[#697077] hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
