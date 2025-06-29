import Breadcrumb from '@/Components/Common/Breadcrumb';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function DashboardNavbar({
    toggleSidebar,
    breadcrumbItems = [],
}) {
    return (
        <header className="sticky top-0 z-30 mb-6 w-full bg-white shadow-sm">
            <div className="mx-auto max-w-screen-2xl space-y-2 px-4 py-3 sm:px-6 md:px-8">
                {/* Tombol Hamburger */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={toggleSidebar}
                        className="rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none md:hidden"
                        aria-label="Buka menu"
                    >
                        <HiMenuAlt3 className="h-6 w-6" />
                    </button>
                </div>

                {/* Breadcrumb */}
                {breadcrumbItems.length > 0 && (
                    <div>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                )}
            </div>
        </header>
    );
}
