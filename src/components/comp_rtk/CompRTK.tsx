import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement, reset } from "./redux/slices/rtkcounter";

const CompRTK = () => {
  const RTKcount = useAppSelector((s) => s.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter Functionality using RTK: {RTKcount}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CompRTK;
