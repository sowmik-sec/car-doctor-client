import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Contact />
      <Products />
      <Team />
    </div>
  );
}

export default Home;
