import CategoryCard from '@/Components/Public/CategoryCard';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

export default function ShareSection() {
    const shareLinks = [
        { icon: <FaFacebookF className="h-8 w-8 text-[#70B9BE]" />, href: '#' },
        { icon: <FaXTwitter className="h-8 w-8 text-[#70B9BE]" />, href: '#' },
        { icon: <FaInstagram className="h-8 w-8 text-[#70B9BE]" />, href: '#' },
        {
            icon: <FaPinterestP className="h-8 w-8 text-[#70B9BE]" />,
            href: '#',
        },
        {
            icon: <MdOutlineEmail className="h-8 w-8 text-[#70B9BE]" />,
            href: '#',
        },
    ];

    return (
        <section className="bg-gray-200 dark:bg-gray-800">
            <div className="mx-auto flex max-w-screen-2xl justify-center px-4 py-8 lg:py-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-normal text-black dark:text-white md:text-xl">
                        Bagikan Resep Ini:
                    </h1>
                    <ul className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        {shareLinks.map((item, i) => (
                            <CategoryCard
                                key={i}
                                icon={
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-4 border-[#70B9BE] bg-gray-200">
                                        {item.icon}
                                    </div>
                                }
                                href={item.href}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
