import { useContext } from "react";
import { MyContext } from "./context/Context";

export const ComponentA = () => {
  const { myCount, updateCount } = useContext<any>(MyContext);
  const handleClick = () => {
    updateCount(myCount + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Increament from comp A : </button>
    </>
  );
};
