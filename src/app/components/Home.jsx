// import Hero from "./Hero"
import ScrollingTextImages from "./ScrollingTextImages"
import HeroAbogado from "./Hero2" 
import InsuranceScams from "./InsuranceScams"
import Services from "./Services"

  export default function Home() {
    return (
      <div className="bg-gray-50">
        <HeroAbogado></HeroAbogado>
        {/* <Hero></Hero> */}
        <div className="my-4">
        <ScrollingTextImages></ScrollingTextImages>
        {/* <Services></Services> */}
        </div>
        <InsuranceScams></InsuranceScams>
      </div>
    )
  }
  