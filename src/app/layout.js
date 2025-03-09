import { Poppins } from "next/font/google";
import "./globals.css";
// import Footer from "../components/Footer"
import Header from "./components/Header";
import Script from 'next/script';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Hyaluromax Skin Builder L | Futerman International Products',
  description: "Somos el único laboratorio sudamericano que diseña y elabora dispositivos médicos en base a ácido hialurónico reticulado e hidroxiapatita de calcio",
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
      </head>



      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-6BSR3YN7GC`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6BSR3YN7GC');
  `}
      </Script>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l; j.async=true; j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KK3ZHBR9');
  `}
      </Script> */}


      <body className={`${poppins.className} poppins relative`}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK3ZHBR9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        <Header />
        {children}
        </body>
    </html>
  );
}
