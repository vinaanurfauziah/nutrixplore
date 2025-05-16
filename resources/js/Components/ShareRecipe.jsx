import { Link } from '@inertiajs/react';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaXTwitter,
} from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

export default function ShareRecipe() {
    const socialLinks = [
        { icon: <FaFacebookF className="h-8 w-8" />, href: '/recipe/hidangan' },
        { icon: <FaXTwitter className="h-8 w-8" />, href: '#' },
        { icon: <FaInstagram className="h-8 w-8" />, href: '#' },
        { icon: <FaPinterestP className="h-8 w-8" />, href: '#' },
        { icon: <MdOutlineEmail className="h-8 w-8" />, href: '#' },
    ];

    return (
        <section className="bg-gray-200 dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-normal leading-tight tracking-tight text-black dark:text-white md:text-xl">
                            Bagikan Resep Ini:
                        </h1>
                        <ul className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                            {socialLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="rounded-lg p-2 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
