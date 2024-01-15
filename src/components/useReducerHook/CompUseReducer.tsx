import { useReducer } from "react";
import myReducer from "./MyReducer";
const IntialData = { myData: 1000 };

const CompUseReducer = () => {
  const [state, dispatch] = useReducer(myReducer, IntialData);

  const handleUpdateData = (type: string) => {
    dispatch({ type });
  };

  return (
    <>
      <h1>Counter Functionality using useReducerHook: {state.myData}</h1>
      <button onClick={() => handleUpdateData("INCREAMENT")}>
        INCREMENT
      </button>{" "}
      <button onClick={() => handleUpdateData("DECREAMENT")}>DECREMENT</button>{" "}
      <button onClick={() => handleUpdateData("ADD10")}>ADD 10</button>{" "}
      <button onClick={() => handleUpdateData("MINUS10")}>MINUS 10</button>{" "}
      <button onClick={() => handleUpdateData("RESET")}>RESET 0</button>{" "}
    </>
  );
};

export default CompUseReducer;
