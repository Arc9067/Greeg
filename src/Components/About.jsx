import React from "react";
import person3 from "../assets/person3.png";

const About = () => {
  return (
    <section className="py-[250px] w-full relative">
      <div className="absolute top-40 left-5 text-white text-opacity-20 text-[128px] font-memeFont tracking-widest">
        O
      </div>
      <div className="text-white absolute bottom-10 right-0 text-opacity-20 text-[128px] font-memeFont tracking-widest">
        A
      </div>
      <div className="text-white absolute top-32 right-0 text-opacity-20 text-[128px] font-memeFont tracking-widest">
        H
      </div>
      <img src={person3} alt="" className="lg:absolute left-0" />
      <div className="container grid lg:grid-cols-2 justify-end items-center gap-14">
        <article className=""></article>
        <article className="self-end flex flex-col gap-6">
          <h1 className="font-luckiestGuy text-6xl md:text-7xl">
            <span className="text-white  ">About </span>
            <span className="text-lime-400  ">BOOM BOOM</span>
          </h1>
          <div className=" text-white text-[16px] font-normal leading-loose tracking-wide">
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading <br />
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading <br />
            American dollar is loosing its value. Crypto Era is becoming
            mainstream and there’s very chance that world adopts Ethereum as the
            global leading{" "}
          </div>
          <a
            href=""
            className="w-[238px] h-[54px] font-anakeimDisplaySsiRegular px-8 py-4 bg-green-700 rounded shadow  border border-lime-400 justify-center items-center gap-[10px] inline-flex"
          >
            <div className="text-white text-[16px] leading-snug">
              BUY BOOM BOOM
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
