import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";
function AboutUs() {
  return (
    <div className="flex sm:flex-col md:flex-row my-32">
      <div className="relative lg:w-1/2">
        <img src={img1} alt="" className="w-3/4" />
        <img
          src={img2}
          alt=""
          className="absolute border-8 border-white right-5 top-1/2 w-1/2"
        />
      </div>
      <div className="space-y-6 lg:w-1/2">
        <h4 className="text-xl text-red-400 font-bold">About Us</h4>
        <h2 className="text-5xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn text-white bg-[#FF3811]">Get More Info</button>
      </div>
    </div>
  );
}

export default AboutUs;
