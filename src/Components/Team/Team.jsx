import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <section id="team" className="max-w-7xl m-auto  text-center lg:mt-52 mt-20">
      <div className="heading my-4" data-aos="fade-up" data-aos-duration="2500">
        Our Team<span></span>
      </div>
      <p
        className="text-slate-400 font-serif text-xl"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Contact us for any queries, question, or ideas
      </p>
      <div className="flex flex-wrap justify-center gap-20 my-12">
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./president.png"
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">XYZ</h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">XYZ</h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

          <div className="layer absolute top-0 w-full h-full left-0 bg-transparent duration-700 hover:bg-black hover:opacity-70">
            <p className="flex  gap-5 justify-center w-full opacity-0 absolute  top-12 left-3 text-white text-2xl translate-y-8 px-2 ">
              <CgMail className="text-3xl" />
              <FaLinkedinIn className="text-3xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-32 gap-y-12">
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./president.png"
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Dr. Prakash Kumar
          </h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Prof. Pankaj rai
          </h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Prof. Pankaj rai
          </h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Prof. Pankaj rai
          </h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
            alt=""
          />
          <h3 className="text-slate-400 text-2xl uppercase my-2">
            Prof. Pankaj rai
          </h3>
          <p className="text-slate-400 text-xl">Our Chief Coordinator</p>

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
            className="w-60 rounded-tl-xl rounded-br-xl image"
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
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./direcor.jpeg"
            className="w-60 rounded-tl-xl rounded-br-xl image"
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
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./direcor.jpeg"
            className="w-60 rounded-tl-xl rounded-br-xl image"
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
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./direcor.jpeg"
            className="w-60 rounded-tl-xl rounded-br-xl image"
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
        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="./direcor.jpeg"
            className="w-60 rounded-tl-xl rounded-br-xl image"
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
      </div>
    </section>
  );
};

export default Team;
