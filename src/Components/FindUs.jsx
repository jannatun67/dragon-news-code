import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div>
        <div className="join flex join-vertical *:bg-base-100">
          <button className="btn join-item border-gray-400 justify-start"><FaFacebookSquare />Facebook</button>
          <button className="btn join-item border-gray-400 justify-start"><FaTwitter />Twitter</button>
          <button className="btn join-item border-gray-400 justify-start"><FaInstagram />Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
