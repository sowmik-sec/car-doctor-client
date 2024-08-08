import {
  FaUsers,
  FaRegClock,
  FaHandsHelping,
  FaWrench,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";
function CoreFeatures() {
  return (
    <div className="mb-32">
      <div className="text-center w-1/2 mx-auto space-y-5">
        <h3 className="text-2xl text-red-400 font-bold">Core Features</h3>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="md:flex md:justify-evenly my-10">
        <div className="p-3 border-2 rounded-lg flex flex-col items-center">
          <FaUsers className="w-8 h-8" />
          <p className="text-lg font-bold">Expert Team</p>
        </div>
        <div className="bg-orange-500 text-white p-3 border-2 rounded-lg flex flex-col items-center">
          <FaRegClock className="w-8 h-8" />
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>
        <div className="p-3 border-2 rounded-lg flex flex-col items-center">
          <FaHandsHelping className="w-8 h-8" />
          <p className="text-lg font-bold">24/7 Support</p>
        </div>
        <div className="p-3 border-2 rounded-lg flex flex-col items-center">
          <FaWrench className="w-8 h-8" />
          <p className="text-lg font-bold">Best Equipment</p>
        </div>
        <div className="p-3 border-2 rounded-lg flex flex-col items-center">
          <FaShieldAlt className="w-8 h-8" />
          <p className="text-lg font-bold">100% Guaranty</p>
        </div>
        <div className="p-3 border-2 rounded-lg flex flex-col items-center">
          <FaShippingFast className="w-8 h-8" />
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default CoreFeatures;
