import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import CategoryCard from '@/Components/Public/CategoryCard';
import { FaRegClock } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa6';
import { GiScales } from 'react-icons/gi';
import { LuPrinter } from 'react-icons/lu';
import { PiBowlFood, PiCookingPotBold } from 'react-icons/pi';

export default function DetailHero() {
    const infoItems = [
        {
            icon: <FaRegClock className="h-10 w-10 text-[#70B9BE]" />,
            text: '5m',
        },
        {
            icon: <PiCookingPotBold className="h-10 w-10 text-[#70B9BE]" />,
            text: '15m',
        },
        {
            icon: <PiBowlFood className="h-10 w-10 text-[#70B9BE]" />,
            text: '1 Porsi',
        },
        {
            icon: <GiScales className="h-10 w-10 text-[#70B9BE]" />,
            text: '345 kkal',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">
                        Lorem Ipsum Dolor Sit Amet
                    </h1>
                    <div className="mb-6 flex max-w-2xl items-center lg:mb-8">
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="ms-1 h-8 w-8 text-yellow-300"
                                viewBox="0 0 22 20"
                                fill="currentColor"
                            >
                                <path d="..." />
                            </svg>
                        ))}
                        <svg
                            className="ms-1 h-8 w-8 text-gray-300 dark:text-gray-500"
                            viewBox="0 0 22 20"
                            fill="currentColor"
                        >
                            <path d="..." />
                        </svg>
                    </div>
                    <ul className="grid grid-cols-4 gap-4 text-gray-500 dark:text-gray-400">
                        {infoItems.map((item, i) => (
                            <CategoryCard
                                key={i}
                                icon={
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                        {item.icon}
                                    </div>
                                }
                                text={item.text}
                                href="#"
                            />
                        ))}
                    </ul>
                    <div className="mt-6 grid grid-cols-4 gap-4">
                        <a href="#" className="bg-[#70B9BE] text-white ... ...">
                            Langsung ke resep
                        </a>
                        <a
                            href="#"
                            className="border-[#70B9BE] text-[#70B9BE] ... ..."
                        >
                            Simpan Resep{' '}
                            <FaRegBookmark className="-mr-1 ml-2 h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            className="border-[#70B9BE] text-[#70B9BE] ... ..."
                        >
                            Print <LuPrinter className="-mr-1 ml-2 h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src={EggTomatoSoup} alt="egg" />
                </div>
            </div>
        </section>
    );
}
