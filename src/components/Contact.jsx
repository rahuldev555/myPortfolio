import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
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
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
