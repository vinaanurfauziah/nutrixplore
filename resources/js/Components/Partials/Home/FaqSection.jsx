import SectionHeading from '@/Components/Common/SectionHeading';
import Accordion from '@/Components/Public/Accordion';
import faqData from '@/data/faqData';

export default function FaqSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <SectionHeading
                    subtitle="PERTANYAAN UMUM TENTANG NUTRIDAPUR"
                    title="Temukan Solusi dan Jawaban atas Kebutuhan Anda di Aplikasi Ini"
                />
                <div className="container mx-auto max-w-screen-lg p-4">
                    <Accordion items={faqData} />
                </div>
            </div>
        </section>
    );
}
