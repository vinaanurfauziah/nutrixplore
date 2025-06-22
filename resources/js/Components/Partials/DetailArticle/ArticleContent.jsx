export default function ArticleContent() {
    const paragraphs = [
        'Alpukat, buah hijau dengan tekstur lembut dan rasa creamy, telah lama dikenal sebagai makanan super yang kaya manfaat kesehatan. Selain lezat, alpukat mengandung berbagai nutrisi penting yang dapat mendukung tubuh Anda dalam banyak cara.',
        'Salah satu keajaiban utama alpukat adalah kandungan lemak sehatnya. Tidak seperti lemak jahat yang ditemukan dalam makanan olahan, alpukat kaya akan lemak tak jenuh tunggal yang baik untuk jantung. Lemak ini membantu menurunkan kadar kolesterol jahat (LDL) sambil meningkatkan kolesterol baik (HDL), sehingga menjaga kesehatan pembuluh darah dan mengurangi risiko penyakit kardiovaskular.',
        'Tidak hanya itu, alpukat juga kaya akan serat. Dalam satu buah alpukat ukuran sedang, Anda bisa mendapatkan sekitar 10 gram serat, yang sangat membantu dalam menjaga pencernaan tetap sehat. Serat juga mendukung pengelolaan berat badan karena memberikan rasa kenyang lebih lama, sehingga Anda tidak mudah tergoda untuk makan berlebihan.',
        'Selain lemak sehat dan serat, alpukat juga kaya akan vitamin dan mineral. Kandungan vitamin E yang tinggi berperan sebagai antioksidan kuat, melindungi sel-sel tubuh dari kerusakan akibat radikal bebas. Vitamin C yang terkandung di dalamnya mendukung sistem kekebalan tubuh dan membantu produksi kolagen untuk kulit sehat.',
        'Kandungan kalium dalam alpukat juga patut diperhatikan. Kalium adalah mineral penting yang membantu mengatur tekanan darah, mencegah kram otot, dan menjaga keseimbangan cairan tubuh. Bahkan, alpukat mengandung lebih banyak kalium daripada pisang, menjadikannya pilihan tepat untuk diet sehat.',
        'Manfaat alpukat tidak hanya berhenti pada kesehatan fisik. Studi menunjukkan bahwa alpukat dapat meningkatkan suasana hati karena kandungan folatnya yang tinggi. Folat berperan dalam produksi serotonin dan dopamin, dua neurotransmitter yang memengaruhi kebahagiaan dan kesejahteraan emosional.',
        'Cara mengonsumsi alpukat pun sangat fleksibel. Anda bisa menikmatinya sebagai smoothie, salad, olesan roti, atau bahkan dimakan langsung. Dengan rasa yang netral dan tekstur yang lembut, alpukat dapat dikombinasikan dengan berbagai hidangan.',
        'Jadi, jika Anda mencari makanan yang lezat, serbaguna, dan sarat manfaat, alpukat adalah jawabannya. Sertakan alpukat dalam menu harian Anda, dan rasakan keajaibannya bagi kesehatan tubuh dan pikiran Anda.',
    ];

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="w-full px-4 py-4 lg:px-0">
                <div className="mx-auto w-full max-w-[680px] text-lg leading-8 text-gray-800 dark:text-gray-300 lg:ml-[calc((100%-680px)/4)]">
                    {paragraphs.map((text, i) => (
                        <p key={i} className="mb-6">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
