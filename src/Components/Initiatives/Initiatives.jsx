import React, { useEffect } from "react";
import data from "../util/slider.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Initiatives = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <>
      <section id="events" className="flex flex-col max-w-7xl m-auto ">
        <div className="text-center">
          <div className="heading my-8 " data-aos="fade-up" data-aos-duration="1000">
            Our Initiatives
            <span></span>
          </div>

          <div className="flex flex-wrap gap-x-5  justify-evenly">
            {data.map((card) => (
              <div
                className="w-80  my-8  shadow-lg shadow-blue-900/100 rounded-xl p-4 duration-1000 hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img src={card.image} className="rounded-r-2xl" alt="" />
                <h3 className="text-blue-700 text-3xl text-start font-semibold">
                  {card.event}
                </h3>
                <p className="text-white font-sans text-justify">
                  {card.details}
                </p>
                <button className="btn bg-blue-700 border-none px-3 py-2 text-white rounded-full my-4">
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Initiatives;
