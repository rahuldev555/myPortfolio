// import navIcon1 from "../assets/nav-icon1.svg";
// import navIcon2 from "../assets/nav-icon2.svg";
// import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <div>
      <div className="py-5 flex  gap-10 justify-center text-center">
        <a href="www.linkedin.com/in/rahul-darla-reactdev">
          <img
            src={navIcon1}
            alt="Icon"
            className="space-y-2 bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 rounded-lg p-2 cursor-pointer"
          />
        </a>
        <a href="https://instagram.com/rahul_makes_noice?igshid=ZGUzMzM3NWJiOQ==">
          <img
            src={navIcon3}
            alt="Icon"
            className="space-y-2 bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 rounded-lg p-2 cursor-pointer"
          />
        </a>
        <a href="https://www.facebook.com/darla.rahul/">
          <img
            src={navIcon2}
            alt="Icon"
            className="space-y-2 bg-gradient-to-r from-teal-500 via-sky-500 to-violet-500 rounded-lg p-2 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};
