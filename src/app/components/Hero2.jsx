'use client'

import { useEffect } from 'react'
import { animate, inView } from 'motion'

export default function HeroAbogado() {
  useEffect(() => {
    inView(".scroll-section h2, .scroll-section h1, .scroll-section a", (element) => {
      animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      )
      return () => animate(element, { opacity: 0, x: -100 })
    })
  }, [])

  return (
    <div
      className="relative bg-gray-900 text-white overflow-hidden h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative  bg-opacity-50 p-10 rounded-lg text-center max-w-3xl">
        <section className="scroll-section">
          <h2 className="text-5xl font-bold sm:text-6xl opacity-0">RESPUESTA LEGAL</h2>
          <h1 className="mt-6 text-lg text-gray-300 opacity-0">
            Somos un estudio jurídico especializado en accidentes de tránsito, accidentes laborales y reclamos contra aseguradoras.
          </h1>
          <a
            href="#contacto"
            className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-lg font-semibold text-[#000d22] shadow-lg opacity-0 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Consulta Gratis
          </a>
        </section>
      </div>
    </div>
  )
}
