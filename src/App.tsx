import CompRTK from "./components/comp_rtk/CompRTK";
import { MyContextProvider } from "./components/useContextApi/context/Context";
import CompUseContextApi from "./components/useContextApi/Index";
import CompUseReducer from "./components/useReducerHook/CompUseReducer";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <CompUseContextApi />
      </MyContextProvider>
      <hr />
      <CompRTK />
      <hr />
      <CompUseReducer />
    </div>
  );
}

export default App;
