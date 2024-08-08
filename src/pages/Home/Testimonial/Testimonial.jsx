import { FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="mb-28">
      <div className="text-center w-1/2 mx-auto space-y-5">
        <p className="text-xl font-bold text-orange-600">Testimonial</p>
        <h1 className="text-5xl font-bold">What Customer Says</h1>
        <p className=" mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="relative">
        <div className="md:flex md:justify-between">
          <div className="p-10 border-2 md:w-1/2 h-auto">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                  alt=""
                />
                <div className="ml-2">
                  <h3>Sundar Pichai</h3>
                  <p>CEO Google</p>
                </div>
              </div>
              <div>
                <FaQuoteRight className="w-14 h-14 text-red-200" />
              </div>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
          </div>
          <div className="p-10 border-2 md:w-1/2 h-auto">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                  alt=""
                />
                <div className="ml-2">
                  <h3>Sundar Pichai</h3>
                  <p>CEO Google</p>
                </div>
              </div>
              <div>
                <FaQuoteRight className="w-14 h-14 text-red-200" />
              </div>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
          </div>
        </div>
        <div className="hidden md:absolute md:flex md:justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href={`#`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
