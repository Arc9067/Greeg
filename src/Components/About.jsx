import React from "react";
import person3 from "../assets/person3.png";
import Vimeo from "@u-wave/react-vimeo";
import video from "../assets/video.mp4";

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
        <article className="self-end flex flex-col gap-6 w-full">
          <h1 className="font-luckiestGuy text-6xl md:text-7xl">
            <span className="text-white  ">About </span>
            <span className="text-lime-400  ">grug 2.0</span>
          </h1>
          <div className=" text-white text-[16px] font-normal leading-loose tracking-wide">
            Yo! It's grug, The Rock Market KaBoomBoom, welcoming you to an epic
            adventure. Get ready to unleash the power of Ooga Bogga, where
            ancient wisdom meets modern crypto. Join me on this wild ride as we
            combine the primal forces of innovation and excitement to
            revolutionize the Ethereum blockchain. Together, we'll create a
            legendary crypto project that will shake the market and make heads
            turn. Embrace the Ooga Bogga spirit and let's rock the crypto world
            like never before!
          </div>
          <a
            href="https://www.dextools.io/app/ether/pair-explorer/0x1282b50a51f0694A418e7555Dfff1e8cd1a5a416"
            target="_blank"
            className="w-[238px] h-[54px] font-anakeimDisplaySsiRegular px-8 py-4 bg-green-700 rounded shadow  border border-lime-400 justify-center items-center gap-[10px] inline-flex"
          >
            <div className="text-white text-[16px] leading-snug capitalize">
              live chart
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
