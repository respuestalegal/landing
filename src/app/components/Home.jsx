// import Hero from "./Hero"
import ScrollingTextImages from "./ScrollingTextImages"
import HeroAbogado from "./Hero2"
import InsuranceScams from "./InsuranceScams"
import Services from "./Services"
import ContactForm from "./ContactForm"
import { PageIntro } from "./PageIntro"

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroAbogado />
      <div className="my-4">
        <ScrollingTextImages />
      </div>
      <InsuranceScams />
      <div className="max-w-3xl w-5/6 mx-auto" id="contact-section">
        <PageIntro eyebrow="Contactanos" title="Estamos listos para escucharte y ayudarte.">
          <p>Completa el formulario y te responderemos a la brevedad.</p>
        </PageIntro>
        <div className="max-w-3xl w-3/4 mx-auto"> {/* Centrado y limitado en ancho */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
