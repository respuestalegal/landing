'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaMoneyBillWave, FaFileSignature, FaPhone } from "react-icons/fa";

const incentives = [
  {
    name: "Montos bajos por indemnización",
    description: "Las aseguradoras suelen ofrecer montos menores a los que realmente te corresponden.",
    icon: <FaMoneyBillWave className="text-white text-4xl" />,
  },
  {
    name: "Presiones para firmar acuerdos rápidos",
    description: "Intentan que firmes rápidamente para evitar que reclames lo que realmente mereces.",
    icon: <FaFileSignature className="text-white text-4xl" />,
  },
  {
    name: "Ofertas engañosas",
    description: "Te llaman con un acuerdo 'superador' que en realidad solo les beneficia a ellos.",
    icon: <FaPhone className="text-white text-4xl" />,
  },
];

export default function EnganosAseguradoras() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      {/* Sección de encabezado animado */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className=" flex flex-col justify-center items-center bg-[#000d22] text-center p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white animate-pulse my-12"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
        >
          ¡No dejes que te engañen!
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl text-white mt-4"
        >
          Engaños comunes de las aseguradoras.
        </motion.h3>
      </motion.div>

      {/* Sección de conexión antes de las tarjetas */}
      <div className="bg-[#000d22] py-8 px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-white"
        >
          Las compañías de seguros suelen intentar minimizar sus costos, ofreciendo:
        </motion.p>
      </div>

      {/* Sección de cards con animación al hacer scroll */}
      <div ref={ref} className="bg-[#000d22] py-12 px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8"  
        >
          {incentives.map((incentive, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#222f44] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center"
            >
              <div className="text-center">{incentive.icon}</div>
              <h3 className="mt-4 text-lg font-medium text-white">{incentive.name}</h3>
              <p className="mt-2 text-sm text-white">{incentive.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
