import React, { createContext, useState } from "react";
const MyContext = createContext({});

const MyContextProvider = ({ children }: any) => {
  const [myCount, setMyCount] = useState<any>(10);

  const updateCount = (newData: any) => {
    setMyCount(newData);
  };

  return (
    <MyContext.Provider value={{ myCount, updateCount }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
