import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

const Patronage = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="max-w-7xl m-auto  text-center lg:my-20 my-0">
      <div className="heading my-8" data-aos="fade-up" data-aos-duration="1000">
        Our Patronage <span></span>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div
          className="relative lg:translate-y-48 translate-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="./president.png"
            className="w-80 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Dr. Prakash Kumar
          </h3>
          <p className="text-slate-400 text-xl">President IIC 6.0</p>

          <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
            <p className="flex  gap-5 justify-center w-full opacity-0 absolute  top-12 left-3 text-white text-2xl translate-y-8 px-2 ">
              <CgMail className="text-3xl" />
              <FaLinkedinIn className="text-3xl" />
            </p>
          </div>
        </div>
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./direcor.jpeg"
            className="w-80 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Prof. Pankaj rai
          </h3>
          <p className="text-slate-400 text-xl">Chairman IIC 6.0</p>

          <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
            <p className="flex  gap-5 justify-center w-full opacity-0 absolute  top-12 left-3 text-white text-2xl translate-y-8 px-2 ">
              <CgMail className="text-3xl" />
              <FaLinkedinIn className="text-3xl" />
            </p>
          </div>
        </div>
        <div
          className="relative lg:translate-y-48 translate-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="./convener.jpeg"
            className="w-80 h-80 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Dr. Murli Manohar
          </h3>
          <p className="text-slate-400 text-xl">Convener IIC 6.0</p>

          <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
            <p className="flex  gap-5 justify-center w-full opacity-0 absolute  top-12 left-3 text-white text-2xl translate-y-8 px-2 ">
              <CgMail className="text-3xl" />
              <FaLinkedinIn className="text-3xl" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patronage;
