import AbautMe from "../components/Home/AbautMe";
import Hero from "../components/Home/Hero";
import OurProjects from "../components/Home/OurProjects";
import Services from "../components/Home/Services";
import SkallIcon from "../components/Home/SkallIcon";

function HomePage() {
    return (
        <>
          <Hero />
          <SkallIcon />
          <AbautMe /> 
          <Services />
          <OurProjects /> 
         
        </>
    );
}

export default HomePage;