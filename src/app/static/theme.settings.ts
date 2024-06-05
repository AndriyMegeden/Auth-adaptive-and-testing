import { Menu } from "@interfaces/theme.interface";

export const logo = 'assets/png/logo/logo.png';
export const logoBig = 'assets/png/logo/logo-big.png';
export const companyPhone = '+49 (1609) 55-24-530';
export const companyMail = 'VorfahrQR.de@gmail.com';

export const mainMenu: Menu[] = [
    {
        id: 'home',
        title: 'other.menus.home',
        link: '/home'
    },
    {
        id: 'products',
        title: 'other.menus.products',
        link: '/products'
    },
    {
        id: 'price',
        title: 'other.menus.price',
        link: '/price'
    },
    {
        id: 'faq',
        title: 'other.menus.faq',
        link: '/faq'
    },
    {
        id: 'contact',
        title: 'other.menus.contact',
        link: '/contact'
    },
    {
        id: 'about_us',
        title: 'other.menus.about_us',
        link: '/about-us'
    }
]

export const customerMenu: Menu[] = [
    {
        id: 'my_archive',
        title: 'layouts.menu_layout.my_archive',
        link: '/cabinet/my-archive',
        icon: 'menu-qr'
    },
    {
        id: 'access_settings',
        title: 'layouts.menu_layout.access_settings',
        link: '/cabinet/access-settings',
        icon: 'menu-qr'
    },
    {
        id: 'my_qr_center',
        title: 'layouts.menu_layout.my_qr_center',
        link: '/cabinet/my-qr-center',
        icon: 'menu-qr',
        default: true,
    },
    {
        id: 'account_settings',
        title: 'layouts.menu_layout.account_settings',
        link: '/cabinet/account-settings',
        icon: 'menu-qr'
    },
    {
        id: 'support_center',
        title: 'layouts.menu_layout.support_center',
        link: '/cabinet/support-center',
        icon: 'menu-qr'
    },
    {
        id: 'logout',
        title: 'layouts.menu_layout.logout',
        icon: 'menu-qr'
    },
]