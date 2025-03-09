import * as motion from "motion/react-client";
import Image from "next/image";
import Lawyer1 from "../../images/lawyer_1.png"
import Lawyer2 from "../../images/lawyer_2.png"
import Lawyer3 from "../../images/lawyer_3.png"
import Lawyer4 from "../../images/lawyer_4.png"


const items = [
  {
    title: "Solo cobramos si ganás",
    description:
      "Nuestro trabajo es a resultado. Si no ganás, no pagás nada. Iniciá el reclamo sin gastos y sin adelantos.",
    img: Lawyer1,
  },
  {
    title: "Experiencia comprobada",
    description:
      "Con más de 2,000 casos exitosos, conocemos el sistema y sabemos cómo maximizar tu indemnización.",
    img: Lawyer2,
  },
  {
    title: "Atención personalizada",
    description:
      "Cada caso es único, y te acompañamos en cada etapa del proceso.",
    img: Lawyer3,
  },
  {
    title: "Defensa contra las aseguradoras",
    description:
      "Nos aseguramos de que no aceptes acuerdos injustos o pagos inferiores a lo que te corresponde.",
    img: Lawyer4,
  },
];

export default function ScrollingTextImages() {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 lg:px-24 gap-10 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
            <p className="mt-4 text-lg text-gray-700">{item.description}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={item.img} alt={item.title}
              className="w-full h-auto rounded-xl shadow-lg"/>

          </motion.div>
        </section>
      ))}
    </div>
  );
}
