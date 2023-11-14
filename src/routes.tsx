import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdEvent,
  MdPerson,
  MdEventAvailable,
} from 'react-icons/md';

import { IoLogOut } from "react-icons/io5";

const routes = [
  {
    name: 'Dashboard Home',
    layout: '/admin',
    path: '/home',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Registered Events',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdEventAvailable className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Upcoming Events',
    layout: '/admin',
    icon: <MdEvent className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Logout',
    layout: '/auth',
    path: 'sign-in',
    icon: <IoLogOut className="h-6 w-6" />,
  },
];
export default routes;
