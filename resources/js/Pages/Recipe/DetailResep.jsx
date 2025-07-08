import Breadcrumb from '@/Components/Common/Breadcrumb';
import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
import ShareBox from '@/Components/Common/ShareBox';
import TagList from '@/Components/Common/TagList';
import DetailHero from '@/Components/Partials/Recipe/DetailHero';
import DetailTabs from '@/Components/Partials/Recipe/DetailTabs';
import Footer from '@/Components/Templates/Footer';
import Navbar from '@/Components/Templates/Navbar';
import resepData from '@/data/resepData';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

function findResep(kategori, subkategori, slug) {
    return resepData?.[kategori]?.[subkategori]?.find((r) => r.slug === slug);
}

function findTagsForResep(slug) {
    const tags = [];

    Object.entries(resepData).forEach(([kategori, subkategoriObj]) => {
        Object.entries(subkategoriObj).forEach(([subkategori, resepList]) => {
            const match = resepList.find((r) => r.slug === slug);
            if (match) {
                const label = subkategori
                    .replace(/_/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                tags.push({
                    label,
                    href: `/recipe/${kategori}/${subkategori}`,
                });
            }
        });
    });

    return tags;
}

export default function DetailResep({ auth, kategori, subkategori, slug }) {
    const resep = findResep(kategori, subkategori, slug);
    const tags = findTagsForResep(slug);

    const [showPopup, setShowPopup] = useState(false);

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleUnsave = () => {
        console.log('Resep dibatalkan penyimpanannya');
    };

    if (!resep) {
        return <div>Resep tidak ditemukan</div>;
    }

    return (
        <>
            <Head title={resep.judul} />
            <div className="flex min-h-screen flex-col">
                <Navbar auth={auth} />

                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        { label: kategori, href: `/recipe/${kategori}` },
                        {
                            label: subkategori,
                            href: `/recipe/${kategori}/${subkategori}`,
                        },
                        { label: slug.replace(/-/g, ' '), href: '#' },
                    ]}
                />

                <main className="flex-grow space-y-8">
                    <DetailHero
                        title={resep.judul}
                        stats={{
                            kalori: resep.kalori,
                            durasi: resep.durasi,
                            cook: resep.durasi,
                            porsi: resep.porsi || 1,
                        }}
                        gambar={resep.gambar}
                        onSave={handleSave}
                        onUnsave={handleUnsave}
                    />

                    <DetailTabs
                        bahan={resep.bahan}
                        langkah={resep.langkah}
                        nutrisi={resep.nutrisi}
                    />

                    <TagList
                        tags={findTagsForResep(resep.slug)}
                        title="Kategori yang Relevan"
                        animated={true}
                    />

                    <ShareBox label="Bagikan Resep Ini:" bg="gray" />
                </main>

                <Footer />

                {showPopup && (
                    <SaveSuccessPopup
                        type="resep"
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </div>
        </>
    );
}
