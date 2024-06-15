import React, { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <section
      className="max-w-7xl m-auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <hr className="text-white" />
      <div className="flex lg:flex-row flex-col lg:text-left text-center">
        <div className="flex-1 text-white  my-4">
          <img
            src="./iicbitsindri_logo.jpeg"
            className="rounded-full w-32 mb-4 mx-auto lg:mx-0"
            alt=""
          />
          <p className="text-xl font-mono mb-6">IIC 6.0, BIT SINDRI</p>
          <h3>IDEATE</h3>
          <h3>INNVATE</h3>
          <h3>INCUBATE</h3>
        </div>
        <div className="flex-1 text-slate-400 lg:translate-y-40 translate-y-0">
          <h3 className="text-white text-xl font-serif font-semibold mb-6">
            CONTACT US
          </h3>
          <p>Phone : 7746799509,9678656788</p>
          <p>Email : iic@bitsindri.ac.in</p>
        </div>
        <div className="flex-1 lg:translate-y-40 translate-y-5">
          <h3 className="text-white text-xl font-serif font-semibold">
            FOLLOW US ON
          </h3>
          <div className="my-6 flex gap-4 justify-center">
            <a href="">
              <AiFillInstagram className="text-red-800 text-4xl" />
            </a>
            <a href="">
              <FaFacebook className="text-blue-800 text-4xl" />
            </a>
            <a href="">
              <FaLinkedin className="text-orange-400 text-4xl" />
            </a>
            <a href="">
              <FaXTwitter className="text-blue-800 text-4xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xl text-center text-white font-serif my-4">
        Designed and developed by Vijay Modak
      </div>
      <hr className="text-white" />
      <p className="text-white text-lg text-center font-sans mt-4">
        Copyright © 2024 - All rights reserved
      </p>
    </section>
  );
};

export default Footer;
