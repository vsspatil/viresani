import AboutUs from "./AboutUs";
import ContactSection from "./ContactSection";
import HeroCarousel from "./HeroCarousel";
import LatestProjects from "./LatestProjects";
import Servo from "./Servo";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import WhyTrustUs from "./WhyTrustUs";
import WorkProcess from "./WorkProcess";


export default function Home() {
  return (
    <>
          <HeroCarousel/>
          
          <AboutUs/>
          <WhyChooseUs/>
          <Servo/>
          <WorkProcess/>
          <WhyTrustUs/>
          <Testimonials/>
          <LatestProjects/>
          <ContactSection/>
    </>
  );
}
