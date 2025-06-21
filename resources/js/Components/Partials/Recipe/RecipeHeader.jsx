import Breadcrumb from '@/Components/Common/Breadcrumb';
import Navbar from '@/Components/Templates/Navbar';

export default function RecipeHeader({ auth }) {
    return (
        <header>
            <Navbar auth={auth} />
            <Breadcrumb items={[{ label: 'Resep', href: '/recipe' }]} />
        </header>
    );
}
