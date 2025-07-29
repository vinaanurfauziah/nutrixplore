import SectionHeading from '@/Components/Common/SectionHeading';
import CategoryCard from '@/Components/Public/CategoryCard';
import { motion } from 'framer-motion';
import { GiWheat } from 'react-icons/gi';
import { LiaAllergiesSolid } from 'react-icons/lia';
import { PiCarrot, PiCookingPot } from 'react-icons/pi';
import { RiHealthBookLine } from 'react-icons/ri';
import { TbBowlSpoon } from 'react-icons/tb';
const categories = [
    {
        icon: <TbBowlSpoon className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Hidangan',
        value: 'hidangan', // ✅ cocok, karena controller handle kolom kategori_hidangan
    },
    {
        icon: <RiHealthBookLine className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Kondisi Kesehatan',
        value: 'kondisi', // ✅ cocok dengan kategoriMap
    },
    {
        icon: <GiWheat className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Diet',
        value: 'diet', // ✅ cocok
    },
    {
        icon: <LiaAllergiesSolid className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Alergi',
        value: 'alergi', // ✅ cocok
    },
    {
        icon: <PiCarrot className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Nutrisi',
        value: 'nutrisi', // ✅ cocok
    },
    {
        icon: <PiCookingPot className="h-10 w-10 text-[#70B9BE]" />,
        text: 'Metode Memasak',
        value: 'metode', // ✅ cocok, karena controller handle kolom metode_memasak
    },
];

export default function RecipeCategorySection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="JELAJAHI RESEP KAMI"
                    title="Temukan resep lezat dan bernutrisi dari berbagai kategori pilihan!"
                />
                <ul className="grid grid-cols-2 gap-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: 'easeOut',
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="rounded-lg"
                        >
                            <CategoryCard
                                icon={
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                        {item.icon}
                                    </div>
                                }
                                text={item.text}
                      href={`/recipe/kategori/${item.value}`}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
