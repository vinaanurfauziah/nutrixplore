import DashboardNavbar from '@/Components/Dashboard/Navbar';
import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Edit() {
    const { id } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Untuk sekarang, hanya console.log (karena belum ada backend)
        console.log('Data yang akan dikirim:', data);
        alert(`Berhasil menyimpan perubahan untuk admin ID ${id}`);
    };

    return (
        <>
            <Head title="Edit Admin" />
            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>
                <main className="flex-1 px-4 py-8 md:px-8">
                    <DashboardNavbar
                        breadcrumbItems={[{ label: 'Edit Admin' }]}
                    />

                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Edit Admin ID: {id}
                    </h1>

                    <div className="max-w-xl rounded-lg bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                />
                                {errors.password && (
                                    <p className="text-sm text-red-600">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-6 py-2 text-sm font-semibold text-white hover:bg-[#51979e] focus:outline-none focus:ring-2 focus:ring-[#70B9BE] focus:ring-offset-2"
                            >
                                Simpan Perubahan
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
