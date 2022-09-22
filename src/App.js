import React from "react";
import ReactDOM from "react-dom";
// import DefaultPlayground from "./components/DefaultPlayground";
import  BabylonScene  from "./components/BabylonScene";


export default function App() {
  return (
    <div className="App">
      {/* <DefaultPlayground/> */}
      <BabylonScene />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
