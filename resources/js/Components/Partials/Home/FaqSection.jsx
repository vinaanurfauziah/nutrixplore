import Accordion from '@/Components/Public/Accordion';
import faqData from '@/data/faqData';

export default function FaqSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-lg px-4 py-8 lg:py-16">
                <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                    PERTANYAAN UMUM TENTANG NUTRIDAPUR
                </h5>
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                    Temukan Solusi dan Jawaban atas Kebutuhan Anda di Aplikasi Ini
                </h2>
                <div className="container mx-auto p-4">
                    <Accordion items={faqData} />
                </div>
            </div>
        </section>
    );
}
