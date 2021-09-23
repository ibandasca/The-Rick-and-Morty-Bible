import React, { createContext, useState } from "react";

const CounterContext = createContext(0);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
