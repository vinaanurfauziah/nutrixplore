import SaveButton from '@/Components/Common/SaveButton';
import { motion } from 'framer-motion';

const RecipeCard = ({
    title,
    imageUrl,
    link,
    kalori,
    durasi,
    onSave,
    onUnsave,
}) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl shadow-md transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                },
            }}
            whileTap={{ scale: 0.97 }}
        >
            <img
                src={imageUrl}
                alt={title}
                className="h-72 w-full rounded-2xl object-cover transition-all duration-300 sm:h-80 md:h-96 lg:h-[420px]"
            />

            <div className="absolute bottom-6 left-4 right-4 rounded-2xl bg-[#70B9BE] bg-opacity-95 px-5 py-5 text-white shadow-lg">
                <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug sm:text-lg md:text-xl">
                    <a href={link} className="hover:underline">
                        {title}
                    </a>
                </h3>
                <div className="mt-2 flex items-center justify-between text-sm text-white/80 sm:text-base">
                    <p>
                        {kalori} Kalori • {durasi} menit
                    </p>
                    <SaveButton
                        onSave={onSave}
                        onUnsave={onUnsave}
                        className="ml-2"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default RecipeCard;
