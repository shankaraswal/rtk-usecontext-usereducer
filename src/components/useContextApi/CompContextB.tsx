import { useContext } from "react";
import { MyContext } from "./context/Context";

export const ComponentB = () => {
  const { myCount, updateCount } = useContext<any>(MyContext);

  const handleClick = () => {
    updateCount(myCount - 1);
  };

  return (
    <>
      <button onClick={handleClick}>Decreament from comp B</button>
    </>
  );
};
