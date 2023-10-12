import React from "react";
import Input from "./SearchBar";
import IconCart from "./IconCart";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-amarelo fixed w-full max-h-20 z-50">
      <header>
        <nav className="flex items-center max-w-[1440px] min-h-[4rem] p-5 mx-auto my-0">
          <div className="flex justify-between gap-4 h-full w-full">
            <Link
              href={"#"}
              className="flex items-center justify-center bg-black/5 rounded-full w-10 h-10"
            >
              <AiOutlineHome className="text-3xl text-black/80" />
            </Link>
            <div className="flex items-center gap-4">
              <Input />
              <IconCart />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
