import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <>
      <section id="about" className="text-center">
        <div className="heading text-5xl py-2 mt-20 text-white font-bold" data-aos="fade-up" data-aos-duration="1000">
          About <span></span>
        </div>
        <div className="flex lg:flex-row flex-col max-w-7xl m-auto">
          <div
            className="flex-1 text-justify my-8 mx-2 text-gray-300"
            data-aos="fade-up-right"
          >
            <h4 className="font-serif text-blue-700 text-2xl">MISSION</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              sit quae a labore perspiciatis odio reprehenderit? Sunt, cumque
              laboriosam, alias veniam optio tempore quas, animi amet dicta
              quaerat est impedit corporis quisquam obcaecati nostrum! Molestiae
              quos aspernatur quidem adipisci laborum, in repellat minima soluta
              eius, blanditiis accusantium dignissimos officia perferendis
              tempora consectetur inventore minus incidunt rem deleniti aperiam
              esse culpa illo quaerat nobis! Earum at perferendis laborum ut
              corporis. Expedita laborum cum voluptas iure explicabo voluptate
              molestiae provident, quos quod est, esse earum, vitae deserunt
              itaque. Quidem voluptas minus tempora?
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              tenetur. Beatae facere harum aperiam doloribus, iste quia sit
              reprehenderit.
            </p>
            <h4 className="font-serif text-blue-700 text-2xl">VISION</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              laborum dolorem tempore molestiae fugiat quam perferendis qui quod
              eos sint impedit nemo doloremque consequatur, ad veniam aliquid.
              Neque eum quos officia laborum, dignissimos animi rerum. Magnam
              sequi dolores id at!
            </p>
          </div>
          <div className="lg:flex-1 my-20  mx-4" data-aos="fade-up-left">
            <img src="./abt.jpg" className="rounded-2xl" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
