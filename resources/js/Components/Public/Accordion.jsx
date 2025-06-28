import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300"
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between p-4 text-left text-base font-semibold text-gray-900"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                            <span
                                className={`transform transition-transform duration-300 ${
                                    isOpen ? 'rotate-45' : ''
                                }`}
                            >
                                <BiPlus className="h-6 w-6 shrink-0 text-[#70B9BE]" />
                            </span>
                        </button>

                        <div
                            className={`px-4 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                        >
                            <div>{item.answer}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
