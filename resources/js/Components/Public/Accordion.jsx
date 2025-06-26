import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow-md"
                        layout
                        transition={{
                            layout: { duration: 0.4, ease: 'easeOut' },
                        }}
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between p-4 text-left text-base font-semibold text-gray-900"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <BiPlus className="h-6 w-6 shrink-0 text-[#70B9BE]" />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    className="px-4 pb-4 text-gray-700"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <div>{item.answer}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Accordion;
