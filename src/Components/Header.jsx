import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";

const Header = () => {
  return (
    <header className="py-3 w-full font-luckiestGuy z-10 ">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-4xl uppercase">
          greg
        </a>
        <ul className="hidden lg:flex gap-14 items-center text-2xl">
          <li>
            <a href="" className="hover:text-light">
              home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-light">
              Tekonomics
            </a>
          </li>
          <li>
            <a href="" className="hover:text-light">
              raodmap
            </a>
          </li>
        </ul>
        <a
          href=""
          className="px-8 py-4 bg-secondary border border-light rounded-md shad font-anakeimDisplaySsiRegular flex items-center gap-3 hover:bg-transparent uppercase max-w-full"
        >
          <LiaTelegramPlane /> join greg
        </a>
      </nav>
    </header>
  );
};

export default Header;
