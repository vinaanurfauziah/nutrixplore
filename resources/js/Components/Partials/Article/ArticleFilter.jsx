import FilterButton from '@/Components/Common/FilterButton';
import { motion } from 'framer-motion';

export default function ArticleFilter({ options }) {
    return (
        <motion.div
            className="mb-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <FilterButton text="Artikel" options={options} />
        </motion.div>
    );
}
