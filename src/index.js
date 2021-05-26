import React from "react";
import ReactDom from "react-dom";

export function App() {
  return <h1>Hello world</h1>;
}

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
