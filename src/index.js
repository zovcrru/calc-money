import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
//import App from "./App";

//const Test = () => React.createElement("button", null, "Hello, world !");
//const Header = (props) => <h1 id="hi">{props.text}</h1>;
//или так
const Header = ({ text }) => <h1 id="hi">{text}</h1>;
//  React.createElement("h1", { id: "hi" }, props.text);
//const Element = React.createElement("р", null, "Параграф");

const Element = <p>Параграф</p>;

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header text={"свойство текст"} />
        <Element />;
      </div>
    );
    /*    return React.createElement(
      "div",
      { className: "main" },
      React.createElement(FunctionComponents, { text: "свойство текст" }),
      Element
    );*/
  }
}
//jsx
function Test2() {
  return <button>"Hello, world !"</button>;
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
