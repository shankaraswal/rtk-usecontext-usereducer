// MyReducer.js
const myReducer = (state: any, action: { type: any; payload?: number }) => {
  switch (action.type) {
    case "INCREAMENT":
      return { state, myData: state.myData + 1 };
    case "DECREAMENT":
      return { state, myData: state.myData + 1 };
    case "RESET":
      return { state, myData: 0 };
    case "ADD10":
      return { state, myData: state.myData + 10 };
    case "MINUS10":
      return { state, myData: state.myData - 10 };
    default:
      return state;
  }
};

export default myReducer;
