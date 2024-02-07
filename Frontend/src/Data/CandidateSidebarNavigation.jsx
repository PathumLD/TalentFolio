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
    FiUsers
} from 'react-icons/fi'

export const CandidateSidebarNavigation = [

    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/candidate',
        icon: <FiAirplay />
    },
    {
        key: 'profile',
        label: 'Profile',
        path: '/candidate/profile',
        icon: <FiUser />
    },
    {
        key: 'applied/vacancies',
        label: 'Applied Vacancies',
        path: '/applied-vacancies',
        icon: <FiCheckCircle />
    },
    {
        key: 'interviews',
        label: ' Interviews',
        path: '/candidate/interviews',
        icon: <FiCalendar />
    },
    {
        key: 'all-vacancies',
        label: 'All Vacancies',
        path: '/candidate/all-vacancies',
        icon: <FiPlusCircle />
    },
    {
        key: 'events',
        label: 'Events',
        path: '/counsellor/events',
        icon: <FiGrid />
    },
    
]


