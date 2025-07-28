    import { Head } from '@inertiajs/react';
    import { useState } from 'react';

    import Breadcrumb from '@/Components/Common/Breadcrumb';
    import SaveSuccessPopup from '@/Components/Common/SaveSuccessPopup';
    import ShareBox from '@/Components/Common/ShareBox';
    import TagList from '@/Components/Common/TagList';
    import DetailHero from '@/Components/Partials/Recipe/DetailHero';
    import DetailTabs from '@/Components/Partials/Recipe/DetailTabs';
    import Footer from '@/Components/Templates/Footer';
    import Navbar from '@/Components/Templates/Navbar';
    export default function DetailResep({ auth, resep, tags }) {
        const [showPopup, setShowPopup] = useState(false);

        if (!resep) {
            return <div>Resep tidak ditemukan</div>;
        }

        const handleSave = () => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        };

        const handleUnsave = () => {
            console.log('Resep dibatalkan penyimpanannya');
        };

        return (
            <>
                <Head title={resep.judul} />
                <div className="flex min-h-screen flex-col">
                    <Navbar auth={auth} />

                    <Breadcrumb
                        items={[
                            { label: 'Resep', href: '/recipe' },
                            {
                                label: resep.kategori_hidangan,
                                href: `/recipe/${resep.kategori_hidangan}`,
                            },
                            { label: resep.judul, href: '#' },
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
                            bahan={resep.ingredients}
        langkah={resep.steps}
        nutrisi={resep.nutrition}
                        />

<TagList
    tags={tags} // langsung dari props (array of string)
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