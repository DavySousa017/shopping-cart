"use client";
import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import appContext from "../context/appContext";
import getProducts from "../api/getProducts";

const Input = () => {

  const [isActive, setIsActive] = useState(null)
  const [searchValue, setSearchValue] = useState()
  const { setLoading, setProducts } = useContext(appContext)

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const products = await getProducts(searchValue);
    setProducts(products);
    setLoading(false);
  }

  return (
    <form
      onSubmit={Submit}
      onChange={({ target }) => setSearchValue(target.value)}
      className="h-10 flex flex-row-reverse bg-white/10 border shadow-md duration-300 rounded-2xl border-none"
    >
      <button onClick={() => setIsActive(!isActive)} type="button" className="w-10 h-10 flex items-center justify-center bg-black/20 shadow-md shadow-black/20 rounded-2xl">
        <AiOutlineSearch className=" text-white text-3xl flex items-center mx-2" />
      </button>
      <input
        placeholder="Procurar produtos"
        required
        type="text"
        className={isActive ? "text-white focus:outline-none outline-none bg-transparent px-3 duration-300 ease-linear w-[500px] max-lg:w-[400px] max-md:w-[300px] max-sm:w-full" : "w-0 outline-none bg-transparent duration-300 ease-linear"}
      />
    </form>
  );
};

export default Input;
