/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Service({ service }) {
  const { _id, title, img, price } = service;
  return (
    <div className="mx-auto shadow-md p-3 rounded-md">
      <img src={img} alt="" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex justify-between">
        <p className="text-xl text-p-color">Price: ${price}</p>
        <Link to={`/checkout/${_id}`}>
          <FaArrowRight className="text-p-color" />
        </Link>
      </div>
    </div>
  );
}

export default Service;
