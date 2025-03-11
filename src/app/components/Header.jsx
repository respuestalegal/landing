'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from "../../images/logo_respuesta_legal.png"
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#000d22] shadow-md transition">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex gap-2">
                        <Image
                            src={Logo}
                            alt="Respuesta Legal Estudio Jurídico Accidentes de Tránsito Accidentes Laborales"
                            className="h-12 w-auto"
                        />
                        <h2 className='bold text-white'>Respuesta Legal <br /> <span className='italic text-sm'>Estudio Jurídico</span></h2>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Abrir menú</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="#" className="text-sm font-semibold text-white">Nosotros</Link>
                    <Link href="#" className="text-sm font-semibold text-white">Accidentes de tránsito</Link>
                    <Link href="#" className="text-sm font-semibold text-white">Accidentes de trabajo</Link>
                    <Link href="#" className="text-sm font-semibold text-white">Blog</Link>
                    <Link href="/contact" className="text-sm font-semibold text-white">Contactanos</Link>
                </div>
            </nav>

            {/* Menú móvil */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#000d22] p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex gap-2">
                            <Image
                                src={Logo}
                                alt="Respuesta Legal"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 p-2.5 text-white"
                        >
                            <span className="sr-only">Cerrar menú</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flex flex-col gap-y-4">
                        <Link href="#" className="text-white text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
                        {/* <Link href="#" className="text-white text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Accidentes de tránsito</Link>
                        <Link href="#" className="text-white text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Accidentes de trabajo</Link>
                        <Link href="#" className="text-white text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Blog</Link> */}
                        <Link href="/contact" className="text-white text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Contactanos</Link>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
