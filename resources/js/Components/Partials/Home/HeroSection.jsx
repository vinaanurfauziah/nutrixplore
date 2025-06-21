import EggTomatoSoup from '@/Assets/egg-tomato-soup.png';

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:py-16">
                <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#70B9BE] px-6 py-16 shadow-lg sm:grid-cols-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="order-2 sm:order-1 sm:col-span-7">
                        <h1
                            className="mb-4 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            Resep Sehat Sesuai Kebutuhanmu
                        </h1>
                        <p className="mb-6 mt-6 max-w-2xl text-sm font-light text-white sm:text-base md:text-lg lg:text-xl">
                            Pilih resep berdasarkan kondisi kesehatan atau
                            preferensi makanan. Bantu tubuhmu tetap bugar lewat
                            makanan yang tepat.
                        </p>
                        <a
                            href="/recipe/detailResep"
                            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-lg hover:bg-gray-100 sm:text-lg"
                        >
                            Jelajahi Sekarang
                            <span className="ml-2 rounded bg-black p-1">
                                <svg
                                    className="h-4 w-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className="order-1 flex justify-center sm:order-2 sm:col-span-5 sm:justify-end">
                        <img
                            src={EggTomatoSoup}
                            alt="Ilustrasi resep"
                            className="max-h-80 w-full max-w-xs object-contain sm:max-h-96 sm:max-w-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
