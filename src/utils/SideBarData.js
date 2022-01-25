import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as FcIcon from 'react-icons/fc';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardLine />,
    },
    {
        title: 'O. de Serviço',
        path: '/listos',
        icon: <IoIcons.IoIosDocument />,
    },
    {
        title: 'Sobre Nós',
        path: '/aboutus',
        icon: <AiIcons.AiOutlineBook />,
    },
    {
        title: 'Contato',
        path: '/contact',
        icon: <MdIcons.MdCall />,
    }
]