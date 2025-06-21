import CategoryCard from '@/Components/Public/CategoryCard';
import { GiWheat } from 'react-icons/gi';
import { LiaAllergiesSolid } from 'react-icons/lia';
import { PiCarrot, PiCookingPot } from 'react-icons/pi';
import { RiHealthBookLine } from 'react-icons/ri';
import { TbBowlSpoon } from 'react-icons/tb';

const categories = [
    {
        icon: <TbBowlSpoon className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Hidangan',
        href: '/recipe/hidangan',
    },
    {
        icon: <RiHealthBookLine className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Kondisi Kesehatan',
        href: '#',
    },
    {
        icon: <GiWheat className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Diet',
        href: '#',
    },
    {
        icon: <LiaAllergiesSolid className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Alergi',
        href: '#',
    },
    {
        icon: <PiCarrot className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Nutrisi',
        href: '#',
    },
    {
        icon: <PiCookingPot className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Metode Memasak',
        href: '#',
    },
];

export default function RecipeCategorySection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <h3 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                    JELAJAHI RESEP KAMI
                </h3>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                    Temukan resep lezat dan bernutrisi dari berbagai kategori
                    pilihan!
                </h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((item, index) => (
                        <CategoryCard
                            key={index}
                            icon={
                                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                    {item.icon}
                                </div>
                            }
                            text={item.text}
                            href={item.href}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
