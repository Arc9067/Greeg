import React from "react";
import personRight from "../assets/person-right.png";
import personLeft from "../assets/person-left.png";

const Hero = () => {
  return (
    <section className="py-[50px] w-full relative h-auto">
      <div className="container flex justify-center items-center flex-col gap-7 text-center">
        <h1 className="text-5xl lg:text-8xl font-luckiestGuy">
          DOWN WITH THE BOOM, <br /> UP WITH THE{" "}
          <span className="text-span">greg</span>
        </h1>
        <p className="font-workSans text-xl">
          The Ooga Bogga Crypto Project on Ethereum! <br />
          Yo! It's Greg, The Rock Market KaBoomBoom, welcoming you to an epic
          adventure.
        </p>
        <a
          href=""
          className="w-[355px] h-[54px] px-8 py-4 bg-gradient-to-l from-green-300 to-lime-300 rounded shadow  border border-lime-400 justify-center items-center gap-[10px] text-black text-[16px] leading-snug font-anakeimDisplaySsiRegular  hover:text-white"
        >
          BUY BOOM BOOM
        </a>
        <iframe
          src="https://player.vimeo.com/video/839333859?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1"
          width="100%"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="video"
        ></iframe>{" "}
        <div className="">
          <img
            src={personLeft}
            alt=""
            className="absolute -bottom-40 left-0 w-[10rem] lg:w-auto"
          />
          <img
            src={personRight}
            alt=""
            className="absolute -bottom-40 right-0 w-[10rem] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
