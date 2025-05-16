'use client';

import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    SidebarLogo,
} from 'flowbite-react';
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
} from 'react-icons/hi';

export function ComponentSidebar() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
            <SidebarLogo
                href="#"
                img={{
                    src: 'https://flowbite.com/docs/images/logo.svg',
                    alt: 'Flowbite logo',
                }}
            >
                NutriXplore
            </SidebarLogo>

            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem href="#" icon={HiChartPie}>
                        Dashboard
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiViewBoards}>
                        Profil
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiInbox}>
                        Resep Tersimpan
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiUser}>
                        Artikel Tersimpan
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiShoppingBag}>
                        Products
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiArrowSmRight}>
                        Sign In
                    </SidebarItem>
                    <SidebarItem href="#" icon={HiTable}>
                        Sign Up
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
}
