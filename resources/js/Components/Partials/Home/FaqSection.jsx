import SectionHeading from '@/Components/Common/SectionHeading';
import Accordion from '@/Components/Public/Accordion';

const faqData = [
    {
        question: 'Apa itu NutriDapur?',
        answer: 'NutriDapur adalah platform yang menyediakan informasi nutrisi berbasis web.',
    },
    {
        question:
            'Apakah informasi kesehatan di NutriDapur bisa digunakan sebagai pengganti konsultasi medis?',
        answer: 'Tidak, informasi di NutriDapur hanya bersifat edukatif dan tidak menggantikan saran medis profesional.',
    },
    {
        question:
            'Apakah saya perlu membuat akun untuk menggunakan NutriDapur?',
        answer: 'Tidak, tetapi dengan akun, Anda bisa menyimpan resep favorit dan mengaksesnya dengan lebih mudah.',
    },
    {
        question:
            'Bagaimana cara mencari resep sesuai dengan pantangan makanan tertentu?',
        answer: 'Gunakan fitur filter pada halaman pencarian resep untuk menyesuaikan dengan kebutuhan Anda.',
    },
    {
        question:
            'Bagaimana cara menghubungi tim NutriDapur jika saya memiliki pertanyaan lain?',
        answer: 'Anda bisa menghubungi kami melalui email nutridapur@gmail.com atau media sosial resmi kami.',
    },
];


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
