import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../util/Accordion";
import { useEffect } from "react";

const Achievement = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <section className="flex flex-col lg:flex-row my-20 max-w-7xl m-auto">
      <div className="flex-1">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          Our Achievements <span></span>
        </div>
        <Accordion
          allowMultipleExpanded={false}
          preExpanded={[0]}
          data-aos="fade-up"
          data-aos-duration="2700"
        >
          {data.map((item, i) => {
            return (
              <AccordionItem
                className=" border-blue-600 border-2 my-4 rounded-2xl "
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="text-blue-600 font-semi-bold text-lg flex p-4 justify-between">
                    <div>{item.icon}</div>
                    <span>{item.headings}</span>
                    <div className="flex">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-serif w-3/4">{item.detail}</p>
                    <img
                      src={item.image}
                      alt=""
                      className="rounded-full w-28"
                    />
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="flex-1" data-aos="fade-up" data-aos-duration="2700">
        <img src="./success.png" alt="" />
      </div>
    </section>
  );
};

export default Achievement;
