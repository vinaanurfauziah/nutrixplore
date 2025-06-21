// Components/Partials/Recipe/DetailHeader.jsx
import Navbar from '@/Components/Templates/Navbar';
import Breadcrumb from '@/Components/Common/Breadcrumb';

export default function DetailHeader({ auth }) {
    return (
        <>
            <header>
                <Navbar auth={auth} />
            </header>
            <div>
                <Breadcrumb
                    items={[
                        { label: 'Resep', href: '/recipe' },
                        { label: 'Detail Resep', href: '/recipe/detailResep' },
                    ]}
                />
            </div>
        </>
    );
}
