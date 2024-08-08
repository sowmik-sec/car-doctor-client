import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Services from "../Services/Services";

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Contact />
      <Products />
    </div>
  );
}

export default Home;
