// src/context/ApologyContext.jsx
import React, { createContext, useContext, useState } from "react";

const ApologyContext = createContext();

export const ApologyProvider = ({ children }) => {
  const [apologyData, setApologyDataState] = useState({});

  const setApologyData = (id, data) => {
    setApologyDataState((prev) => ({ ...prev, [id]: data }));
  };

  const getApologyData = (id) => apologyData[id];

  return (
    <ApologyContext.Provider value={{ setApologyData, getApologyData }}>
      {children}
    </ApologyContext.Provider>
  );
};

export const useApology = () => useContext(ApologyContext);
