import { ComponentSidebar } from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="nutriXplore" />
            <div className="flex min-h-screen">
                <ComponentSidebar />
                <main className="flex-1">{/* Konten lainnya */}</main>
            </div>
        </>
    );
}
