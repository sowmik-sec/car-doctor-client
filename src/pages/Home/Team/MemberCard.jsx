import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function MemberCard({ member }) {
  const { name, img } = member;
  return (
    <div className="text-center p-4 rounded-lg shadow-lg space-y-3">
      <img src={img} alt="" />
      <h3 className="text-3xl font-bold">{name}</h3>
      <p>Engine Expert</p>
      <div className="flex justify-center">
        <FaFacebook className="text-3xl mr-2" />
        <FaTwitter className="text-3xl mr-2" />
        <FaLinkedin className="text-3xl mr-2" />
        <FaInstagramSquare className="text-3xl mr-2" />
      </div>
    </div>
  );
}

export default MemberCard;
