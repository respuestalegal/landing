import * as motion from "motion/react-client";
import Lawyer1 from "../../images/lawyer_1.png";
import Lawyer2 from "../../images/lawyer_2.png";
import Lawyer3 from "../../images/lawyer_3.png";
import Lawyer4 from "../../images/lawyer_4.png";

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
    <div className="w-full flex flex-col gap-10 px-6 md:px-16 lg:px-24 py-10 bg-white/50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Cómo trabajamos
      </h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >
          {index % 2 === 0 ? (
            <>
              <div
                className="w-[50vw] h-[50vw] max-w-md rounded-xl shadow-lg bg-lawyer"
                style={{ backgroundImage: `url(${item.img.src})` }}
              />
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{item.description}</p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{item.description}</p>
              </motion.div>
              <div
                className="w-[50vw] h-[50vw] max-w-md rounded-xl shadow-lg bg-lawyer"
                style={{ backgroundImage: `url(${item.img.src})` }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
