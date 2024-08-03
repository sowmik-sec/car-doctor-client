/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

function Service({ service }) {
  const { title, img, price } = service;
  return (
    <div className="mx-auto shadow-md p-3 rounded-md">
      <img src={img} alt="" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex justify-between">
        <p className="text-xl text-p-color">Price: ${price}</p>
        <FaArrowRight className="text-p-color" />
      </div>
    </div>
  );
}

export default Service;
