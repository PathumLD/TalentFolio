import React from 'react'
import {
    FiUser,
    FiAirplay,
    FiBookOpen,
    FiBox,
    FiCalendar,
    FiCheckCircle,
    FiDollarSign,
    FiMessageCircle,
    FiPlusCircle,
    FiGrid,
    FiPhone,
    FiBarChart2,
    FiFlag,
    FiUsers
} from 'react-icons/fi'

export const AdminSidebarNavigation = [

    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/admin',
        icon: <FiAirplay />
    },
    {
        key: 'analytics',
        label: 'analytics',
        path: '/admin/analytics',
        icon: <FiBarChart2 />
    },
    {
        key: 'all-vacancies',
        label: 'All Vacancies',
        path: '/admin/all-vacancies',
        icon: <FiPlusCircle />
    },
    {
        key: 'events',
        label: 'Events',
        path: '/company/events',
        icon: <FiFlag />
    },

]

