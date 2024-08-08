import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Contact />
      <Products />
      <Team />
      <CoreFeatures />
      <Testimonial />
    </div>
  );
}

export default Home;
