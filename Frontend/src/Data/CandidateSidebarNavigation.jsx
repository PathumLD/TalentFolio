import React from 'react'
import {
    FiUser,
    FiAirplay,
    FiBookOpen,
    FiBox,
    FiCalendar,
    FiCheckCircle,
    FiDivideSquare,
    FiDollarSign,
    FiMessageCircle,
    FiPhone,
    FiUsers
} from 'react-icons/fi'

export const CandidateSidebarNavigation = [

    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/candidate-dashboard',
        icon: <FiAirplay />
    },
    {
        key: 'profile',
        label: 'Profile',
        path: '/candidate-profile',
        icon: <FiUser />
    },
    {
        key: 'applied-vacancies',
        label: 'Applied Vacancies',
        path: '/applied-vacancies',
        icon: <FiPhone />
    },
    {
        key: 'interviews',
        label: ' Interviews',
        path: '/candidate-interviews',
        icon: <FiCheckCircle />
    },
    {
        key: 'all-vacancies',
        label: 'All Vacancies',
        path: '/candidate/all-vacancies',
        icon: <FiCalendar />
    },
    {
        key: 'events',
        label: 'Events',
        path: '/counsellor/wallet',
        icon: <FiDollarSign />
    },
    
]


