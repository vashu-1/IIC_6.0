import React, { useEffect } from "react";
import data from "../util/skill.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="max-w-7xl m-auto text-center lg:my-20 my-4">
      <div className="heading" data-aos="fade-up" data-aos-duration="1000">
        What we do <span></span>
      </div>
      <div className="flex  gap-12 justify-evenly flex-wrap my-4">
        {data.map((item) => (
          <div className="w-72 shadow-lg shadow-blue-900/100 duration-700  rounded-xl  my-4 p-4 hover:-translate-y-4">
            <img src={item.image} className="h-48" alt="" />
            <h3 className="text-white text-2xl font-bold my-1 font-serif">
              {item.title}
            </h3>
            <p className="text-slate-400 text-left">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
