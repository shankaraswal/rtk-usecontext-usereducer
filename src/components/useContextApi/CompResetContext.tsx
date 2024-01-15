import { useContext } from "react";
import { MyContext } from "./context/Context";

export const ComponentC = () => {
  const { updateCount } = useContext<any>(MyContext);

  const handleClick = () => {
    updateCount(0);
  };

  return (
    <>
      <button onClick={handleClick}>Reset from comp C</button>
    </>
  );
};
