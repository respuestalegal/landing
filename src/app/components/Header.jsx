'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Logo from "../../images/logo_respuesta_legal.png"

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const company = [
    { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
    { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
    {
        name: 'Support',
        href: '#',
        description: 'Get in touch with our dedicated support team or reach out on our community forums',
    },
    { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
<header className="fixed top-0 left-0 w-full z-50 bg-[#000d22]  shadow-md transition">
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex gap-2">
                <Image
                    src={Logo}
                    alt="Respuesta Legal Estudio Jurídico Accidentes de Tránsito Accidentes Laborales"
                    className="h-12 w-auto"
                />
                <h2 className='bold'>Respuesta Legal <br /> <span className='italic text-sm'>Estudio Jurídico</span></h2>
            </a>
        </div>
        <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-white">Nosotros</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Accidentes de tránsito</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Accidentes de trabajo</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Blog</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Contactanos</a>
        </PopoverGroup>
    </nav>
</header>

    )
}
