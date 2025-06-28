import { motion } from 'framer-motion';
import {
    HiBeaker,
    HiBookOpen,
    HiClipboardList,
    HiCollection,
} from 'react-icons/hi';

const icons = {
    'Total Resep': HiClipboardList,
    'Total Artikel': HiBookOpen,
    'Kategori Resep & Artikel': HiCollection,
    'Total Satuan Takaran': HiBeaker,
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: { scale: 1.03, transition: { type: 'spring', stiffness: 300 } },
};

export default function StatBox({ title, value }) {
    const Icon = icons[title] || HiClipboardList;

    return (
        <motion.div
            className="flex flex-wrap items-center gap-4 min-w-0 rounded-2xl bg-white p-6 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                <Icon className="h-8 w-8 text-[#70B9BE]" />
            </motion.div>
            <div className="min-w-0">
                <h3 className="text-lg font-bold text-gray-800">{value}</h3>
                <p className="text-base text-gray-500 break-words">{title}</p>
            </div>
        </motion.div>
    );
}
