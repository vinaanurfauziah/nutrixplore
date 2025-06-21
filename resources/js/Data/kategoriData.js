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
            { nama: 'Stroke', slug: 'stroke', icon: 'GiBrain' },
            { nama: 'Obesitas', slug: 'obesitas', icon: 'FaWeight' },
            { nama: 'Hipertensi', slug: 'hipertensi', icon: 'GiHeartBeats' },
            { nama: 'Paru', slug: 'paru', icon: 'GiLungs' },
            { nama: 'Ginjal', slug: 'ginjal', icon: 'GiKidneys' },
            { nama: 'Kanker', slug: 'kanker', icon: 'GiCancer' },
            { nama: 'Mata', slug: 'mata', icon: 'FaEye' },
            { nama: 'Radang', slug: 'radang', icon: 'GiMedicines' },
            { nama: 'Jantung', slug: 'jantung', icon: 'GiHeartOrgan' },
            { nama: 'Otak', slug: 'otak', icon: 'GiBrain' },
            { nama: 'Kulit', slug: 'kulit', icon: 'GiSkin' },
            { nama: 'Imunitas', slug: 'imunitas', icon: 'GiHealthIncrease' },
            { nama: 'Mood', slug: 'mood', icon: 'GiMeditation' },
            {
                nama: 'Cegah Kanker',
                slug: 'cegah-kanker',
                icon: 'GiMeditation',
            },
            { nama: 'Pencernaan', slug: 'pencernaan', icon: 'GiStomach' },
            { nama: 'Tulang', slug: 'tulang', icon: 'GiBoneKnife' },
            { nama: 'Diabetes', slug: 'diabetes', icon: 'GiHealthIncrease' },
        ],
    },
    diet: {
        nama: 'Diet',
        subkategori: [
            {
                nama: 'Paleo',
                slug: 'paleo',
                icon: 'GiWheat',
            },
            {
                nama: 'Vegan',
                slug: 'vegan',
                icon: 'GiChickenOven',
            },
            {
                nama: 'Low-Carb',
                slug: 'low-carb',
                icon: 'GiWheat',
            },
            {
                nama: 'The Dukan',
                slug: 'the-dukan',
                icon: 'GiChickenOven',
            },
            {
                nama: 'The Ultra-Low-Fat',
                slug: 'ultra-low-fat',
                icon: 'GiWheat',
            },
            {
                nama: 'Keto',
                slug: 'keto',
                icon: 'GiChickenOven',
            },
            {
                nama: 'Mediterrania',
                slug: 'mediterrania',
                icon: 'GiWheat',
            },
            {
                nama: 'Intermittent Fasting',
                slug: 'intermittent-fasting',
                icon: 'GiChickenOven',
            },
        ],
    },
    alergi: {
        nama: 'Alergi',
        subkategori: [
            { nama: 'Susu', slug: 'susu', icon: 'GiWheat' },
            { nama: 'Telur', slug: 'telur', icon: 'GiWheat' },
            {
                nama: 'Kacang',
                slug: 'kacang',
                icon: 'LiaAllergiesSolid',
            },
            {
                nama: 'Ikan',
                slug: 'ikan',
                icon: 'LiaAllergiesSolid',
            },
            {
                nama: 'Kerang',
                slug: 'kerang',
                icon: 'LiaAllergiesSolid',
            },
            {
                nama: 'Daging Ayam',
                slug: 'daging-ayam',
                icon: 'LiaAllergiesSolid',
            },
            {
                nama: 'Kuning Telur',
                slug: 'kuning-telur',
                icon: 'LiaAllergiesSolid',
            },
            {
                nama: 'Gandum',
                slug: 'gandum',
                icon: 'LiaAllergiesSolid',
            },
        ],
    },
    nutrisi: {
        nama: 'Nutrisi',
        subkategori: [
            {
                nama: 'Tinggi Protein',
                slug: 'tinggi_protein',
                icon: 'PiCarrot',
            },
            { nama: 'Tinggi Serat', slug: 'tinggi_serat', icon: 'GiFruitBowl' },
            {
                nama: 'Rendah Natrium',
                slug: 'rendah_natrium',
                icon: 'GiFruitBowl',
            },
            {
                nama: 'Rendah Karbohidrat',
                slug: 'rendah_karbohidrat',
                icon: 'GiFruitBowl',
            },
            { nama: 'Rendah Gula', slug: 'rendah_gula', icon: 'GiFruitBowl' },
            {
                nama: 'Tinggi Kalsium',
                slug: 'tinggi_kalsium',
                icon: 'GiFruitBowl',
            },
            { nama: 'Rendah Lemak', slug: 'rendah_lemak', icon: 'GiFruitBowl' },
            { nama: 'Tanpa Kacang', slug: 'tanpa_kacang', icon: 'GiFruitBowl' },
        ],
    },
    metode: {
        nama: 'Metode Memasak',
        subkategori: [
            { nama: 'Rebus', slug: 'rebus', icon: 'GiBoilingBubbles' },
            { nama: 'Goreng', slug: 'goreng', icon: 'PiCookingPot' },
            { nama: 'Kukus', slug: 'kukus', icon: 'PiCookingPot' },
            { nama: 'Panggang', slug: 'panggang', icon: 'GiOven' },
            { nama: 'Tumis', slug: 'tumis', icon: 'GiOven' },
            {
                nama: 'Merebus Perlahan',
                slug: 'merebus_perlahan',
                icon: 'GiOven',
            },
            {
                nama: 'Menggulai (Stewing)',
                slug: 'menggulai',
                icon: 'GiOven',
            },
            {
                nama: 'Menggoreng Cepat (Stir Frying)',
                slug: 'menggoreng_cepat',
                icon: 'GiOven',
            },
        ],
    },
};

export default kategoriData;
