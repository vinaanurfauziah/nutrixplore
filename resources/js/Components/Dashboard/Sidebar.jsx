'use client';

import logo from '@/Assets/logo-nutridapur.png';
import { Link, useForm, usePage } from '@inertiajs/react';
import {
    Sidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    SidebarLogo,
} from 'flowbite-react';
import {
    HiBookmark,
    HiChartPie,
    HiClipboardList,
    HiLogout,
    HiUser,
    HiUsers,
} from 'react-icons/hi';
import { route } from 'ziggy-js';

export default function SidebarComponent({ onClose }) {
    const { auth } = usePage().props;
    const userRole = auth?.user?.role || 'member';
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <Sidebar
            aria-label="Sidebar navigasi"
            className="flex h-screen flex-col"
        >
            {/* Tombol Tutup (mobile only) */}
            {onClose && (
                <div className="flex justify-end p-4 md:hidden">
                    <button
                        onClick={onClose}
                        className="text-xl text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
            )}

            <SidebarLogo href="/" img={logo} imgAlt="NutriDapur logo">
                NutriDapur
            </SidebarLogo>

            <SidebarItems className="flex-1">
                <SidebarItemGroup>
                    {userRole === 'admin' ? (
                        <>
                            <SidebarItem
                                as={Link}
                                href={route('dashboard')}
                                icon={HiChartPie}
                            >
                                Dashboard Admin
                            </SidebarItem>

                            <SidebarCollapse
                                icon={HiClipboardList}
                                label="Resep"
                            >
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.recipe.list')}
                                >
                                    Daftar Resep
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.recipe.create')}
                                >
                                    Buat Resep Baru
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route(
                                        'dashboard.recipe.category-recipe',
                                    )}
                                >
                                    Kategori Resep
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route(
                                        'dashboard.recipe.measurement-units',
                                    )}
                                >
                                    Satuan Takaran
                                </SidebarItem>
                            </SidebarCollapse>

                            <SidebarCollapse icon={HiBookmark} label="Artikel">
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.article.list')}
                                >
                                    Daftar Artikel
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.article.create')}
                                >
                                    Buat Artikel Baru
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.article.category')}
                                >
                                    Kategori Artikel
                                </SidebarItem>
                            </SidebarCollapse>

                            <SidebarCollapse
                                icon={HiUsers}
                                label="Kelola Admin"
                            >
                                <SidebarItem
                                    as={Link}
                                    href={route('dashboard.kelola-admin.list')}
                                >
                                    Daftar Admin
                                </SidebarItem>
                                <SidebarItem
                                    as={Link}
                                    href={route(
                                        'dashboard.kelola-admin.create',
                                    )}
                                >
                                    Tambah Admin
                                </SidebarItem>
                            </SidebarCollapse>

                            <SidebarItem
                                as={Link}
                                href={route('dashboard.profile')}
                                icon={HiUser}
                            >
                                Profil Saya
                            </SidebarItem>
                        </>
                    ) : (
                        <>
                            <SidebarItem
                                as={Link}
                                href={route('member.dashboard')}
                                icon={HiChartPie}
                            >
                                Dashboard Member
                            </SidebarItem>

                            <SidebarItem
                                as={Link}
                                href={route('dashboardMember.saved.recipes')}
                                icon={HiClipboardList}
                            >
                                Resep Tersimpan
                            </SidebarItem>

                            <SidebarItem
                                as={Link}
                                href={route('dashboardMember.saved.articles')}
                                icon={HiBookmark}
                            >
                                Artikel Tersimpan
                            </SidebarItem>

                            <SidebarItem
                                as={Link}
                                href={route('dashboardMember.profile')}
                                icon={HiUser}
                            >
                                Profil Saya
                            </SidebarItem>
                        </>
                    )}
                </SidebarItemGroup>
            </SidebarItems>

            <SidebarItemGroup>
                <form onSubmit={handleLogout}>
                    <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 focus:outline-none"
                    >
                        <HiLogout className="text-lg" />
                        Logout
                    </button>
                </form>
            </SidebarItemGroup>
        </Sidebar>
    );
}
