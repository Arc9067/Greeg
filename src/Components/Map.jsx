import React from "react";

const Map = () => {
  return (
    <section className="py-[50px] w-full relative bg-primary">
      <div className="h-[490px] w-[490px] absolute bg-overlay left-0 hero-overlay"></div>
      <div className="container flex justify-center flex-col gap-5 items-center z-10 relative text-center">
        <h1 className="font-anakeimDisplaySsiRegular text-5xl uppercase md:text-7xl">
          roadmap
        </h1>
        <p className="font-workSans text-xl">
          grug Roadmap: Paving the Path to Crypto Success
        </p>

        <div className="w-[1136px] p-[0px] flex-col justify-start items-center gap-[34px] inline-flex mt-16">
          <div className="w-[1140px] h-4 relative">
            <div className="w-[1120px] h-[0px] left-[8px] top-[8px] absolute border border-white"></div>
            <div className="w-[1140px] h-4 left-[0px] top-[0px] absolute">
              <div className="w-4 h-4 left-[4px] top-[0px] absolute bg-lime-400 rounded-[100px]" />
              <div className="w-4 h-4 left-[396px] top-[0px] absolute bg-lime-400 rounded-[100px]" />
              <div className="w-4 h-4 left-[1120px] top-[0px] absolute bg-lime-400 rounded-[100px]" />
              <div className="w-4 h-4 left-[746px] top-[-1px] absolute bg-lime-400 rounded-[100px]" />
            </div>
          </div>
          <div className="p-[0px] justify-start items-start flex-col lg:flex-row gap-[26px] inline-flex">
            <div className="w-[360px] pb-5 min-h-[324px] relative bg-gradient-to-b from-teal-900 to-teal-900">
              <div className="pl-[22px] pr-[21px] pt-[9px] pb-2 left-[0px] top-[0px] absolute bg-emerald-900 justify-center items-center inline-flex">
                <div className="text-center text-white text-[24px] font-luckiestGuy leading-loose">
                  1). Genesis Boom
                </div>
              </div>
              <div className="p-[0px] left-[22px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Launch
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Website Launch
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    community formation
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[360px] h-[324px] relative bg-gradient-to-b from-teal-900 to-teal-900">
              <div className="px-[20px] pt-[9px] pb-2 left-[0px] top-[0px] absolute bg-emerald-900 justify-center items-center inline-flex">
                <div className="text-center text-white text-[24px] font-luckiestGuy leading-loose">
                  2). Rock Solid Development
                </div>
              </div>
              <div className="p-[0px] left-[22px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center capitalize text-white text-[20px] font-normal leading-loose">
                    telegram trending
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Renounced Ownership
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    1000+ Holder
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[360px] h-[324px] relative bg-gradient-to-b from-teal-900 to-teal-900">
              <div className="pl-[20px] pr-[19px] pt-[9px] pb-2 left-[0px] top-[0px] absolute bg-emerald-900 justify-center items-center inline-flex">
                <div className="text-center text-white text-[24px] font-luckiestGuy leading-loose">
                  3). Awareness
                </div>
              </div>
              <div className="p-[0px] left-[22px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Twitter Trending
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Coinmarketcap LIsting
                  </div>
                </div>
                <div className="p-[0px] justify-start items-center gap-[12px] inline-flex">
                  <div className="w-4 h-4 relative bg-lime-400 rounded-[100px]" />
                  <div className="text-center text-white text-[20px] font-normal leading-loose">
                    Coingecko Listing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
