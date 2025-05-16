import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white shadow-md">
                    <h2>
                        <button
                            type="button"
                            className="flex w-full items-center justify-between p-4 text-left text-base font-semibold text-gray-900"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                            <BiPlus className="h-6 w-6 shrink-0 text-[#70B9BE]" />
                        </button>
                    </h2>
                    {openIndex === index && (
                        <div className="px-4 pb-4 text-gray-700">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
