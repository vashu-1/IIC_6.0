import React, { useState, useEffect } from "react";
import data from "../util/data.js";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Talk = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent(current == 0 ? data.length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current == data.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="max-w-7xl m-auto">
      <div className="flex xl:flex-row flex-col">
        <div
          className="flex-1"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="./pitch-meeting.png" className="w-full" alt="" />
        </div>
        <div className="flex-1 xl:translate-y-32 text-center">
          <div className="heading " data-aos="fade-up" data-aos-duration="1000">
            Series of Talk <span></span>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            {data.map(
              (item, index) =>
                index === current && (
                  <div key={index}>
                    <div className="flex justify-center">
                      <img
                        className="rounded-full w-32 my-8 "
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-white font-serif">{item.details}</p>
                    </div>
                    <div>
                      <h4 className="text-white mt-2 text-2xl font-bold">
                        {item.name}
                      </h4>
                    </div>
                    <div>
                      <h5 className="text-white text-xl font-bold">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex flex-row gap-4 justify-center my-4">
            <IoIosArrowBack
              className="bg-gray-700 duration-600 text-2xl cursor-pointer"
              onClick={previous}
            />
            <IoIosArrowForward
              className="bg-gray-700 text-2xl cursor-pointer"
              onClick={next}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk;
