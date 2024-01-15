import { useContext } from "react";
import { ComponentA } from "./CompContextA";
import { ComponentB } from "./CompContextB";
import { ComponentC } from "./CompResetContext";
import { MyContext, MyContextProvider } from "./context/Context";

const CompUseContextApi = () => {
  const { myCount, updateCount } = useContext<any>(MyContext);
  return (
    <>
      <h1>Counter Functionality using useContextApi: {myCount}</h1>
      <ComponentA /> <ComponentB /> <ComponentC />
    </>
  );
};

export default CompUseContextApi;
