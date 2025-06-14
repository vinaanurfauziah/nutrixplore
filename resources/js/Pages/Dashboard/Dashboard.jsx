// dashboard cadangan (sebelumnya)
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard Member
                </h2>
            }
        >
            <Head title="Dashboard Member" />

        </AuthenticatedLayout>
    );
}

