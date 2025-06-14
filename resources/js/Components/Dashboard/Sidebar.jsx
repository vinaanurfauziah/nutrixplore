'use client';

import { Link, usePage } from '@inertiajs/react';
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
    HiUser,
} from 'react-icons/hi';
import { route } from 'ziggy-js';

export default function SidebarComponent() {
    const { auth } = usePage().props;
    const userRole = auth?.user?.role || 'member'; // fallback member

    return (
        <Sidebar aria-label="Sidebar navigasi" className="h-screen">
            <SidebarLogo href="/" img="/favicon.svg" imgAlt="NutriXplore logo">
                NutriXplore
            </SidebarLogo>

            <SidebarItems>
                <SidebarItemGroup>
                    {userRole === 'admin' ? (
                        <>
                            {/* ADMIN MENU */}
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
                                    href={route('dashboard.recipe.category')}
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
                        </>
                    ) : (
                        <>
                            {/* MEMBER MENU */}
                            <SidebarItem
                                as={Link}
                                href={route(
                                    'dashboardMember.memberDashboardPage',
                                )}
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
                                href={route('profile.edit')}
                                icon={HiUser}
                            >
                                Profil Saya
                            </SidebarItem>
                        </>
                    )}
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
}
