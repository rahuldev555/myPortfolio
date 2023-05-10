import { Link } from "react-router-dom";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <div>
      <div className="py-5 flex  gap-10 justify-center text-center">
        <Link href="#">
          <img src={navIcon1} alt="Icon" />
        </Link>
        <Link href="#">
          <img src={navIcon2} alt="Icon" />
        </Link>
        <Link href="#">
          <img src={navIcon3} alt="Icon" />
        </Link>
      </div>
    </div>
  );
};
