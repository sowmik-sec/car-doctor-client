import { FaStar } from "react-icons/fa6";

function Product({ product }) {
  const { img, name, price } = product;
  return (
    <div className="text-center shadow-md p-5 rounded-lg">
      <img src={img} alt="" />
      <div className="flex justify-center">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="text-xl text-red-400">{price}</p>
    </div>
  );
}

export default Product;
