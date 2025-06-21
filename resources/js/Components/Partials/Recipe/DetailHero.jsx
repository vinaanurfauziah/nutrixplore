// Components/Partials/Recipe/DetailHero.jsx
import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';
import { FaRegClock } from 'react-icons/fa';
import { PiCookingPotBold, PiBowlFood } from 'react-icons/pi';
import { GiScales } from 'react-icons/gi';
import CategoryCard from '@/Components/Public/CategoryCard';
import RecipeActionButtons from '@/Components/Partials/Recipe/RecipeActionButtons';
import RecipeRating from '@/Components/Partials/Recipe/RecipeRating';

export default function DetailHero() {
    const stats = [
        { icon: <FaRegClock className="h-10 w-10 text-[#70B9BE]" />, text: '5m' },
        { icon: <PiCookingPotBold className="h-10 w-10 text-[#70B9BE]" />, text: '15m' },
        { icon: <PiBowlFood className="h-10 w-10 text-[#70B9BE]" />, text: '1 Porsi' },
        { icon: <GiScales className="h-10 w-10 text-[#70B9BE]" />, text: '345 kkal' },
    ];

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-screen-2xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">
                        Lorem Ipsum Dolor Sit Amet
                    </h1>

                    {/* Rating bintang */}
                    <RecipeRating rating={4} />

                    {/* Stat Cards */}
                    <ul className="grid grid-cols-4 gap-4 text-gray-500 dark:text-gray-400 sm:grid-cols-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-5">
                        {stats.map((item, index) => (
                            <CategoryCard
                                key={index}
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

                    {/* Tombol Aksi */}
                    <RecipeActionButtons />
                </div>

                {/* Gambar */}
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src={EggTomatoSoup} alt="egg" />
                </div>
            </div>
        </section>
    );
}
