"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = () => {

  const [isActive, setIsActive] = useState(null)

  return (
    <form
      className="h-10 flex flex-row-reverse bg-white border shadow-md shadow-black/20 rounded-sm duration-300"
    >
      <button onClick={() => setIsActive(!isActive)} type="button" className="bg-black/5">
        <AiOutlineSearch className="text-black text-3xl flex items-center mx-2" />
      </button>
      <input
        placeholder="Procurar produtos"
        required
        type="text"
        className={isActive ? "focus:outline-none outline-none bg-transparent px-3 duration-300 ease-linear w-[500px] max-lg:w-[400px] max-md:w-[300px] max-sm:w-full" : "w-0 outline-none duration-300 ease-linear"}
      />
    </form>
  );
};

export default Input;
