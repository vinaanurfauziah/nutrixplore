import AutentikasiImage from '@/Assets/Autentikasi-2.png';

export default function AboutIntro() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Tentang Kami
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:items-center">
                    <div className="flex justify-center sm:col-span-5 sm:justify-start">
                        <img
                            src={AutentikasiImage}
                            alt="Ilustrasi resep"
                            className="w-full max-w-sm object-contain sm:max-h-96"
                        />
                    </div>

                    <div className="text-center sm:col-span-7 sm:text-left">
                        <p className="mb-6 text-gray-800 md:text-lg lg:text-lg">
                            Selamat datang di NutriDapur, destinasi terpercaya
                            untuk menemukan berbagai resep masakan lezat yang
                            memudahkan aktivitas memasak sehari-hari. NutriDapur
                            hadir untuk membantu Anda mendapatkan inspirasi
                            memasak sesuai dengan kebutuhan dan selera Anda.
                        </p>
                        <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                            Misi Kami
                        </h2>
                        <p className="mt-2 text-gray-800 md:text-lg lg:text-lg">
                            Kami berkomitmen untuk menyediakan platform yang
                            memudahkan pengguna dalam mencari, menyimpan, dan
                            berbagi resep masakan secara praktis. Dengan
                            antarmuka yang ramah pengguna, kami mendukung
                            pengalaman memasak yang nyaman bagi semua orang,
                            baik pemula maupun ahli.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
