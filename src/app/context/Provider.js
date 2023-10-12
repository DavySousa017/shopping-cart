'use client'
import React, { useState } from "react";
import propTypes from "prop-types";
import appContext from "./appContext";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
