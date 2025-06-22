// Components/Common/ShareBox.jsx
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaXTwitter,
} from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

export default function ShareBox({ label = 'Bagikan Ini:', bg = 'white' }) {
    const platforms = [
        {
            name: 'Facebook',
            icon: FaFacebookF,
            href: '#',
        },
        {
            name: 'Twitter',
            icon: FaXTwitter,
            href: '#',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            href: '#',
        },
        {
            name: 'Pinterest',
            icon: FaPinterestP,
            href: '#',
        },
        {
            name: 'Email',
            icon: MdOutlineEmail,
            href: '#',
        },
    ];

    const bgColor =
        bg === 'gray'
            ? 'bg-gray-100 dark:bg-gray-800'
            : 'bg-white dark:bg-gray-900';

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-3xl px-4 py-6 text-center">
                <h3 className="mb-4 text-base font-semibold text-gray-800 dark:text-white">
                    {label}
                </h3>
                <div className="flex justify-center gap-4">
                    {platforms.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.href}
                                className="transition hover:scale-110"
                                title={`Bagikan ke ${item.name}`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#70B9BE] bg-[#EFFDFF] text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white dark:bg-gray-700 dark:hover:bg-[#70B9BE]">
                                    <Icon className="h-5 w-5" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
