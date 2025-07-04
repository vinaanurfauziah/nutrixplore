import { Link } from '@inertiajs/react';

export default function MoreButton({
    text = 'Lihat Selengkapnya',
    href = '#',
    className = '',
}) {
    return (
        <div
            className={`py-8 text-center text-lg font-bold leading-tight tracking-tight md:text-lg lg:mb-6 ${className}`}
        >
            <Link
                href={href}
                className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-5 py-3 text-white hover:bg-[#51979e]"
            >
                {text}
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
}
