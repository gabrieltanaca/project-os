import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as FcIcon from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardLine />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre Nós',
        path: '/aboutus',
        icon: <FcIcon.FcAbout />,
        cName: 'nav-text'
    },
    {
        title: 'Contato',
        path: '/contact',
        icon: <MdIcons.MdCall />,
        cName: 'nav-text'
    }
]