import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section
      id="contact"
      className="max-w-7xl m-auto text-center my-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="heading">
        Contact Information <span></span>
      </div>
      <h3>Don't hesitate to give us a call or send a contact form message</h3>
      <p className="text-slate-400 flex justify-center tracking-wide gap-2 text-xl font-serif">
        <FaLocationDot className="text-blue-800 text-xl" /> BIT SINDRI, DHANBAD,
        JHARKHAND, 828204
      </p>
      <input
        type="text"
        placeholder="Name"
        className="w-7/12 px-4 py-2 outline-none rounded-3xl my-4"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-7/12 px-4 py-2 outline-none rounded-3xl my-4"
      />
      <textarea
        name=""
        placeholder="Your Message"
        className="w-7/12 px-4 py-6 outline-none rounded-3xl my-4"
      ></textarea>
      <h3 className="text-slate-400 text-lg">
        It may take some time to revert back. You can directly mail us instead!
      </h3>
      <button className="bg-blue-800 text-white rounded-full border-none px-6 py-2 mt-4">
        Submit Now
      </button>
    </section>
  );
};

export default Contact;
