import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Script from 'next/script';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Respuesta Legal | Estudio Jurídico',
  description: "            Somos un estudio jurídico especializado en accidentes de tránsito, accidentes laborales y reclamos contra aseguradoras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Metadata (opcional, si usas metadata en las páginas) */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <body className={`${poppins.className} poppins relative`}>
        <Header />
        {children}

        {/* WhatsApp Floating Icon with message */}
        <div className="whatsapp-container fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all">
          <a
            href="https://wa.me/5491124909167?text=Hola,%20necesito%20asesoramiento%20jur%C3%ADdico" // Reemplaza con el número de teléfono
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl" // Ícono más grande
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
