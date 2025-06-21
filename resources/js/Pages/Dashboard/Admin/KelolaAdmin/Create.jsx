import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <Head title="Tambah Admin" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 px-4 py-8 md:px-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Tambah Admin Baru
                    </h1>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="max-w-lg">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="max-w-lg">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="max-w-lg">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#70B9BE] focus:ring-[#70B9BE] sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="max-w-md">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-6 py-3 text-sm font-semibold text-white hover:bg-[#51979e] focus:outline-none focus:ring-2 focus:ring-[#70B9BE] focus:ring-offset-2"
                                    >
                                        Simpan Admin
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
