import React, { useEffect } from "react";
import "./Header.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: "1000",delay: "1000" });
  }, []);
  return (
    <section className="banner text-center w-full">
      <div className="2xl:translate-y-48 translate-y-44 -z-1">
        <h3
          className="text-white sm:text-2xl text-lg flex justify-center -z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          IDEATE. INNOVATE. INCUBATE.
        </h3>
        <h1
          className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold my-8 -z-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="md:text-blue-700 text-white">I</span>nstitution{" "}
          <span className="md:text-orange-500 text-white">I</span>ncubation{" "}
          <span className="md:text-red-700 text-white">C</span>enter 6.0 <br />
          Bit Sindri
        </h1>
        <button
          className="border-white border-2 mt-6 text-white sm:text-2xl text-xl py-2 px-4 font-serif"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          EXPLORE NOW
        </button>
      </div>
      <div
        className="absolute text-white flex-col bottom-0 md:text-4xl sm:text-3xl text-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaYoutube className="my-6 ml-6 hover:text-red-700" />
        <FaFacebookSquare className="my-6 ml-6 hover:text-blue-700" />
        <FaFacebookMessenger className="my-6 ml-6 hover:text-red-700" />
        <FaLinkedin className="my-6 ml-6 hover:text-red-700" />
        <FaInstagram className="my-6 ml-6 hover:text-red-700" />
        <FaXTwitter className="my-6 ml-6 hover:text-red-700" />
        <hr className="w-3/12 text-white" />
      </div>
      <div className="absolute right-0 translate-x-16 bottom-14 text-white text-lg font-serif ">
        {/* <p className="rotate-90 animate">SCROLLDOWN↠ </p> */}
        <Link to="#about" className="rotate-90 animate">
          SCROLLDOWN↠{" "}
        </Link>
      </div>
    </section>
  );
};

export default Header;
