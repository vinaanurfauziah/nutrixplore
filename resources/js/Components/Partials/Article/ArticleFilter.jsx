import { motion } from 'framer-motion';

export default function ArticleFilter({ options, selected = [], onChange }) {
    const toggleOption = (option) => {
        const updated = selected.includes(option)
            ? selected.filter((item) => item !== option)
            : [...selected, option];

        onChange(updated); // Sync ke parent
    };

    return (
        <motion.div
            className="mb-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            {options.map((option, index) => {
                const isActive = selected.includes(option);

                return (
                    <button
                        key={index}
                        onClick={() => toggleOption(option)}
                        className={`transform rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                            isActive
                                ? 'bg-[#70B9BE] text-white'
                                : 'bg-white text-gray-800 hover:bg-gray-100'
                        } hover:scale-105 hover:shadow-md`}
                    >
                        {option}
                    </button>
                );
            })}
        </motion.div>
    );
}
