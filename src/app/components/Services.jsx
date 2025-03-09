import { SectionIntro } from "./SectionIntro"
import { Container } from "./Container"
import { FadeIn } from "./FadeIn"
import { StylizedImage } from "./StylizedImage"
import { List } from "./List"
import { ListItem } from "./List"
import ImageLawyer from "../../images/lawyer_1.png"

export default function Services() {
    return (
        <>
            <SectionIntro
                eyebrow="Services"
                title="We help you identify, explore, and respond to online reputation challenges"
                className="mt-24 sm:mt-32 lg:mt-40 my-4"
            >
                <p>
                    From protecting your brand&apos;s digital presence to enhancing customer trust, we specialize in monitoring, improving, and managing your online reputation to help you stand out positively in an ever-connected world.
                </p>
            </SectionIntro>
            <Container className="my-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={ImageLawyer}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Solo cobramos si ganás">
                            Nuestro trabajo es a resultado. Si no ganás, no pagás nada. Inicie el reclamo sin gastos y sin adelantos.
                        </ListItem>
                        <ListItem title="Experiencia comprobada">
                            Con más de 2,000 casos exitosos, conocemos el sistema y sabemos cómo maximizar tu indemnización.
                        </ListItem>
                        <ListItem title="Atención personalizada">
                            Cada caso es único, y te acompañamos en cada etapa del proceso.


                        </ListItem>
                        <ListItem title="Defensa contra las aseguradoras">
                            Nos aseguramos de que no aceptes acuerdos injustos o pagos inferiores a lo que te corresponde.

                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )
}