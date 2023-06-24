import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 w-full">
      <div className="container flex justify-between items-center flex-col md:flex-row gap-8 text-center">
        <a href="" className="font-luckiestGuy text-5xl">
          greg
        </a>
        <p className="">
          Copyright © <span className="">{Date()}</span> grEg. All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="" className="hover:scale-90 transition">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9461 21.315C13.4241 21.141 13.4191 20.86 13.9561 20.681L33.0431 14.319C33.5721 14.143 33.8751 14.439 33.7271 14.957L28.2731 34.043C28.1231 34.572 27.8181 34.59 27.5941 34.088L24.0001 26L30.0001 18L22.0001 24L13.9461 21.315Z"
                fill="#B4F60D"
              />
              <rect
                x="1"
                y="1"
                width="46"
                height="46"
                stroke="#B4F60D"
                stroke-width="2"
              />
            </svg>
          </a>
          <a href="" className="hover:scale-90 transition">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4707 16H16.4707C15.3707 16 14.4807 16.9 14.4807 18L14.4707 30C14.4707 31.1 15.3707 32 16.4707 32H32.4707C33.5707 32 34.4707 31.1 34.4707 30V18C34.4707 16.9 33.5707 16 32.4707 16ZM32.4707 20L24.4707 25L16.4707 20V18L24.4707 23L32.4707 18V20Z"
                fill="#B4F60D"
              />
              <rect
                x="1"
                y="1"
                width="46"
                height="46"
                stroke="#B4F60D"
                stroke-width="2"
              />
            </svg>
          </a>
          <a href="" className="hover:scale-90 transition">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0001 14.8422C37.9149 15.3245 36.746 15.6493 35.5205 15.797C36.7731 15.0464 37.7303 13.8604 38.1856 12.4454C37.0142 13.1393 35.7174 13.6438 34.3369 13.9145C33.2345 12.7358 31.6571 12 29.9173 12C26.0047 12 23.1305 15.6493 24.0139 19.4389C18.9816 19.1855 14.5153 16.7739 11.5279 13.1098C9.94071 15.8314 10.706 19.3946 13.403 21.1984C12.4113 21.1664 11.4787 20.8933 10.6617 20.4405C10.5953 23.2458 12.6082 25.8714 15.5218 26.4571C14.6703 26.6884 13.7352 26.7425 12.7854 26.5604C13.5556 28.9671 15.7974 30.7167 18.4452 30.7659C15.8933 32.7641 12.6869 33.6573 9.4707 33.2784C12.153 34.9985 15.3347 36 18.7552 36C30.0059 36 36.3597 26.4989 35.9758 17.9772C37.1619 17.1258 38.188 16.0578 39.0001 14.8422Z"
                fill="#B4F60D"
              />
              <rect
                x="1"
                y="1"
                width="46"
                height="46"
                stroke="#B4F60D"
                stroke-width="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
