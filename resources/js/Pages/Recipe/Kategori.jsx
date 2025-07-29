import Breadcrumb from '@/Components/Common/Breadcrumb';
import CategoryCard from '@/Components/Public/CategoryCard';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import { Head } from '@inertiajs/react';

// Import ikon dari beberapa paket icon
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as LuIcons from 'react-icons/lu';
import * as PiIcons from 'react-icons/pi';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';

const kategoriData = {
    hidangan: {
        nama: 'Hidangan',
        subkategori: [
            { nama: 'Hidangan Pembuka', slug: 'pembuka', icon: 'LuSalad' },
            { nama: 'Sarapan', slug: 'sarapan', icon: 'LuEggFried' },
            { nama: 'Hidangan Utama', slug: 'utama', icon: 'BiBowlRice' },
            {
                nama: 'Hidangan Penutup',
                slug: 'penutup',
                icon: 'GiBerriesBowl',
            },
            { nama: 'Minuman', slug: 'minuman', icon: 'RiDrinksLine' },
            { nama: 'Pelengkap', slug: 'pelengkap', icon: 'TbLeaf' },
            { nama: 'Cemilan', slug: 'cemilan', icon: 'LuGrape' },
            { nama: 'Hidangan Berkuah', slug: 'berkuah', icon: 'LuSoup' },
        ],
    },
    kondisi: {
        nama: 'Kondisi Kesehatan',
        subkategori: [
            { nama: 'Stroke', slug: 'stroke', icon: 'FaBrain' },
            { nama: 'Obesitas/Overweight', slug: 'obesitas', icon: 'GiFat' },
            { nama: 'Hipertensi', slug: 'hipertensi', icon: 'GiHeartBeats' },
            { nama: 'Penyakit Paru Kronis', slug: 'paru', icon: 'FaLungs' },
            {
                nama: 'Penyakit Ginjal Kronis',
                slug: 'ginjal',
                icon: 'GiKidneys',
            },
            {
                nama: 'Dukungan Nutrisi untuk Pasien Kanker',
                slug: 'kanker',
                icon: 'GiTumor',
            },
            { nama: 'Kesehatan Mata', slug: 'mata', icon: 'FaEye' },
            { nama: 'Anti Peradangan', slug: 'radang', icon: 'GiJoint' },
            {
                nama: 'Kesehatan Jantung',
                slug: 'jantung',
                icon: 'BsFillHeartPulseFill',
            },
            { nama: 'Kesehatan Otak', slug: 'otak', icon: 'GiBrain' },
            { nama: 'Dukungan Imunitas', slug: 'imunitas', icon: 'GiAntibody' },
            { nama: 'Peningkat Mood', slug: 'mood', icon: 'TbMoodCheck' },
            {
                nama: 'Pencegahan Kanker',
                slug: 'cegah-kanker',
                icon: 'FaRibbon',
            },
            {
                nama: 'Kesehatan Pencernaan',
                slug: 'pencernaan',
                icon: 'GiStomach',
            },
            { nama: 'Kesehatan Tulang', slug: 'tulang', icon: 'FaBone' },
            { nama: 'Diabetes', slug: 'diabetes', icon: 'GiBlood' },
        ],
    },
    diet: {
        nama: 'Diet',
        subkategori: [
            {
                nama: 'Ikan',
                slug: 'ikan',
                icon: 'FaFish',
            },
            {
                nama: 'Paleo',
                slug: 'paleo',
                icon: 'FaFish',
            },
            {
                nama: 'Vegan',
                slug: 'vegan',
                icon: 'LuVegan',
            },
            {
                nama: 'Rendah Karbohidrat',
                slug: 'rendah-karbohidrat',
                icon: 'GiFishEggs',
            },
            {
                nama: 'Dukan',
                slug: 'dukan',
                icon: 'TbMeat',
            },
            {
                nama: 'The Ultra Low Fat',
                slug: 'ultra-low-fat',
                icon: 'GiFruitBowl',
            },
            {
                nama: 'Keto',
                slug: 'keto',
                icon: 'PiAvocadoFill',
            },
            {
                nama: 'Mediterania',
                slug: 'mediterania',
                icon: 'GiOlive',
            },
            {
                nama: 'Intermittent Fasting',
                slug: 'intermittent-fasting',
                icon: 'TbClock12',
            },
        ],
    },
    alergi: {
        nama: 'Alergi',
        subkategori: [
            { nama: 'Susu', slug: 'susu', icon: 'TbMilkFilled' },
            { nama: 'Telur', slug: 'telur', icon: 'LuEggFried' },
            {
                nama: 'Kacang',
                slug: 'kacang',
                icon: 'GiPeanut',
            },
            {
                nama: 'Kacang Kedelai',
                slug: 'kacang-kedelai',
                icon: 'LuBean',
            },
            {
                nama: 'Kerang',
                slug: 'kerang',
                icon: 'GiNautilusShell',
            },
            {
                nama: 'Daging Ayam',
                slug: 'daging-ayam',
                icon: 'GiChickenOven',
            },
            {
                nama: 'Kuning Telur',
                slug: 'kuning-telur',
                icon: 'FaEgg',
            },
            {
                nama: 'Gandum',
                slug: 'gandum',
                icon: 'GiWheat',
            },
            {
                nama: 'Wijen',
                slug: 'wijen',
                icon: 'GiSesame',
            },
        ],
    },
    nutrisi: {
        nama: 'Nutrisi',
        subkategori: [
            {
                nama: 'Tinggi Protein',
                slug: 'tinggi_protein',
                icon: 'LuEggFried',
            },
            {
                nama: 'Tinggi Serat',
                slug: 'tinggi_serat',
                icon: 'GiHerbsBundle',
            },
            {
                nama: 'Rendah Natrium',
                slug: 'rendah_natrium',
                icon: 'GiSaltShaker',
            },
            {
                nama: 'Rendah Energi',
                slug: 'rendah_lemak',
                icon: 'BiBowlRice',
            },
            { nama: 'Rendah Gula', slug: 'rendah_gula', icon: 'LuCandy' },
            {
                nama: 'Rendah Kolesterol',
                slug: 'rendah_kolesterol',
                icon: 'FaBone',
            },
            {
                nama: 'Rendah Lemak',
                slug: 'rendah_lemak',
                icon: 'GiChickenLeg',
            },
        ],
    },
    metode: {
        nama: 'Metode Memasak',
        subkategori: [
            { nama: 'Merebus', slug: 'merebus', icon: 'PiCookingPotFill' },
            { nama: 'Menggoreng', slug: 'goreng', icon: 'TbCooker' },
            { nama: 'Mengukus', slug: 'kukus', icon: 'CgSmartHomeCooker' },
            { nama: 'Memanggang', slug: 'panggang', icon: 'TbGrill' },
            { nama: 'Menumis', slug: 'tumis', icon: 'CgSmartHomeCooker' },
        ],
    },
};


export default function Category({
    auth,
    recipes = [],
    subcategories = [],
    kategoriSlug,
}) {
    const Icons = {
        ...LuIcons,
        ...BiIcons,
        ...BsIcons,
        ...CgIcons,
        ...FaIcons,
        ...TbIcons,
        ...LuIcons,
        ...BiIcons,
        ...BsIcons,
        ...CgIcons,
        ...FaIcons,
        ...TbIcons,
        ...GiIcons,
        ...RiIcons,
        ...PiIcons,
    };

    const onSave = (id) => {
        console.log('Saved recipe ID:', id);
    };

    const onUnsave = (id) => {
        console.log('Unsaved recipe ID:', id);
    };

    const kategori = kategoriData[kategoriSlug];

    console.log('kategoriSlug:', kategoriSlug);
    console.log('kategoriData:', kategori);
    console.log('subcategories from backend:', subcategories);

    return (
        <>
            <Head title="Kategori Resep" />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />

                <main className="flex-grow bg-white dark:bg-gray-900">
                    <section className="mx-auto max-w-screen-2xl px-4 py-8">
                        <Breadcrumb
                            items={[
                                { label: 'Resep', href: '/recipe' },
                                {
                                    label: kategori?.nama || 'Kategori',
                                    href: '#',
                                },
                            ]}
                        />

                        <h1 className="mb-2 text-center text-lg font-extrabold uppercase text-[#70B9BE] dark:text-white">
                            Kategori Resep
                        </h1>

                        {!kategori && (
                            <div className="mb-4 text-red-500">
                                Data kategori tidak ditemukan untuk slug:{' '}
                                <strong>{kategoriSlug}</strong>
                            </div>
                        )}

                        {kategori && subcategories.length > 0 && (
                            <>
                                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {subcategories.map((item, i) => {
                                        console.log(
                                            '🔍 Mencocokkan item:',
                                            item.name,
                                        );

                                        const matchedSub =
                                            kategori.subkategori.find(
                                                (sub) =>
                                                    sub.nama?.toLowerCase() ===
                                                    item.name?.toLowerCase(),
                                            );

                                        console.log(
                                            '🎯 matchedSub:',
                                            matchedSub,
                                        );

                                        const iconName = matchedSub?.icon;
                                        const IconComponent =
                                            iconName && Icons[iconName];

                                        return (
                                            <CategoryCard
                                                key={i}
                                                text={item.name}
                                                href={`/recipe/${kategoriSlug}/${item.name}`}
                                                icon={
                                                    IconComponent ? (
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                                                            <IconComponent className="h-10 w-10 text-[#70B9BE]" />
                                                        </div>
                                                    ) : null
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        )}
                        {kategori && subcategories.length === 0 && (
                            <div className="mb-4 text-gray-500">
                                Tidak ada subkategori untuk kategori ini.
                            </div>
                        )}
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
