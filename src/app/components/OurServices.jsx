import * as motion from "motion/react-client";

export default function OurServices() {
  const services = [
    {
      title: "Accidentes de Tránsito",
      description: "¿Sufriste un accidente de tránsito?",
      p2: "Si fuiste víctima de un accidente como conductor, acompañante, peatón o ciclista, tenés derecho a reclamar una indemnización.",
      cta: "Descubrí cómo reclamar tu indemnización"
    },
    {
      title: "Accidentes de Trabajo",
      description: "¿Sufriste un accidente de trabajo?",
      p2: "Si sufriste un accidente mientras realizabas tu actividad laboral o en el traslado hacia tu lugar de trabajo,  tenés derecho a reclamar una indemnización.",
      cta: "Conocé tus derechos y reclamá ahora"
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 h-full-screen bg-white/50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Nuestros Servicios
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center md:text-left w-1/2 flex flex-col items-center justify-center h-[300px]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {service.description}
            </h3>
            {/* <p className="mt-2 text-lg text-gray-600">{service.description}</p> */}
            <p className="mt-2 text-lg text-gray-400 text-center">{service.p2}</p>
            <button className="mt-4 px-5 py-2 bg-[#000d22] text-white font-medium rounded-lg hover:bg-blue-700 transition">
              {service.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
