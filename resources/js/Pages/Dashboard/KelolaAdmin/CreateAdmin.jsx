import DashboardSidebar from '@/Components/Dashboard/Sidebar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateAdmin() {
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
        console.log(form); // nanti diganti dengan submit ke server
    };

    return (
        <>
            <Head title="Tambah Admin" />

            <div className="flex min-h-screen bg-gray-100">
                <aside className="hidden w-64 bg-white shadow-md md:block">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-6 md:p-8">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h1 className="mb-6 text-2xl font-bold text-gray-800">
                            Tambah Admin Baru
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className="max-w-lg space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-3 py-2 text-sm shadow-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
                            >
                                Simpan
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
