import { useId } from 'react'
import Link from 'next/link'

import { Border } from '../components/Border'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'
import { PageIntro } from '../components/PageIntro'
import { SocialMedia } from '../components/SocialMedia'
import ContactForm from '../components/ContactForm'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

// function ContactForm() {
//   return (
//     <FadeIn className="lg:order-last">
//       <form>
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Consultas
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Name" name="name" autoComplete="Nombre y apellido" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
//           <TextInput label="Teléfono" type="tel" name="phone" autoComplete="tel" />
//           <TextInput label="Consulta" name="message" />
//           {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
//             <fieldset>
//               <legend className="text-base/6 text-neutral-500">Budget</legend>
//               <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
//                 <RadioInput label="$25K – $50K" name="budget" value="25" />
//                 <RadioInput label="$50K – $100K" name="budget" value="50" />
//                 <RadioInput label="$100K – $150K" name="budget" value="100" />
//                 <RadioInput label="More than $150K" name="budget" value="150" />
//               </div>
//             </fieldset>
//           </div> */}
//         </div>
//         <Button type="submit" className="mt-10">
//           Enviar
//         </Button>
//       </form>
//     </FadeIn>
//   )
// }

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Nuestras oficinas
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Vení a nuestras oficinas y tomemos un café. Escribinos para coordinar.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contactanos 
        </h2>
        
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Mail', 'respuestalegalestudio@gmail.com'],
            ['WhatsApp', '+54 9 11 2490 9167'],
          ].map(([label, value]) => (
            <div key={value}>
              <dt className="font-semibold text-neutral-950 flex items-center gap-2">
                {label === 'WhatsApp' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                )}
                {label}
              </dt>
              <dd>
                <Link href={label === 'WhatsApp' ? `https://wa.me/5491124909167` : `mailto:${value}`} className="text-neutral-600 hover:text-neutral-950">
                  {value}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contactanos" title="Sufriste un accidente de tránsito?">
        <p>Estamos listos para escucharte y ayudarte.</p>
      </PageIntro>

      <Container className=" sm:mt-20 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <div>
            <h2 className="font-display text-base font-semibold text-neutral-950">Consultas</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
