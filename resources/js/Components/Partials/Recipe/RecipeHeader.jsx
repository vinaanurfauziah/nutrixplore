import Breadcrumb from '@/Components/Common/Breadcrumb';
import Navbar from '@/Components/Templates/Navbar';
import PropTypes from 'prop-types';

export default function RecipeHeader({ auth }) {
    const breadcrumbItems = [{ label: 'Resep', href: '/recipe' }];

    return (
        <header>
            <Navbar auth={auth} />
            <Breadcrumb items={breadcrumbItems} />
        </header>
    );
}

RecipeHeader.propTypes = {
    auth: PropTypes.object,
};
