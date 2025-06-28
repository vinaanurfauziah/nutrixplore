import RecipeActionButtons from '@/Components/Partials/Recipe/RecipeActionButtons';
import { FaRegClock } from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { PiBowlFood, PiCookingPotBold } from 'react-icons/pi';

export default function DetailHero({ title, stats, gambar, onSave, onUnsave }) {
    const statsList = [
        {
            icon: <FaRegClock className="h-6 w-6 text-white" />,
            text: `${stats.durasi} menit`,
        },
        {
            icon: <PiCookingPotBold className="h-6 w-6 text-white" />,
            text: `${stats.cook} menit`,
        },
        {
            icon: <PiBowlFood className="h-6 w-6 text-white" />,
            text: `${stats.porsi || '1'} porsi`,
        },
        {
            icon: <GiScales className="h-6 w-6 text-white" />,
            text: `${stats.kalori} kkal`,
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#FFFDF5] to-[#E0F7FA] px-4 py-14 dark:from-gray-900 dark:to-gray-800 sm:px-6">
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                {/* Kiri: Gambar */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl dark:border-gray-700">
                        <img
                            src={gambar || '/default-img.jpg'}
                            alt={title}
                            className="h-full w-full transform object-cover transition duration-500 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>

                {/* Kanan: Info */}
                <div className="flex flex-col justify-start space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        {title}
                    </h1>

                    <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-4 lg:justify-start">
                        {statsList.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center rounded-2xl bg-[#70B9BE] p-4 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#5ca3a8] hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition duration-300 group-hover:bg-white/30">
                                    {item.icon}
                                </div>
                                <p className="mt-3 text-center text-sm font-medium text-white transition duration-300 group-hover:text-white">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <RecipeActionButtons
                            onSave={onSave}
                            onUnsave={onUnsave}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
