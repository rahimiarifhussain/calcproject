import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./Header";
import Add from "./Add";
import Divded from "./Divded";
import Multi from "./Multi";
import Subtract from "./Subtract";

import "./App.css";

function App() {
  const a = 100;
  const b = 200;
  let [addion, setAdd] = React.useState(a + `+` + b + `=`);
  const [sub, setSub] = React.useState(a + `-` + b + `=`);
  const [multi, setMulti] = React.useState(a + `*` + b + `=`);
  const [divded, setDivded] = React.useState(a + `/` + b + `=`);
  return (
    <div className="App">
      <div id="file">
        <section className="">
          <Add addResult={addion} />
          <button onClick={add}>Add</button>
        </section>
        <section>
          <Subtract subtractResult={sub} />
          <button onClick={Subtracted}>Subtract</button>
        </section>
        <section>
          <Multi multiResult={multi} />
          <button onClick={multiply}>Multiply</button>
        </section>
        <section>
          <Divded divdedResult={divded} />
          <button onClick={divd}>Divded</button>
        </section>
        <button className="Button-Clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
  function add() {
    const ad = a + b;
    setAdd(a + `+` + b + `=` + ad);
  }
  function Subtracted() {
    const subtract = a - b;
    setSub(a + `-` + b + `=` + subtract);
  }
  function multiply() {
    const mu = a * b;
    setMulti(a + `*` + b + `=` + mu);
  }
  function divd() {
    const d = a / b;
    setDivded(a + `/` + b + `=` + d);
  }

  function clear() {
    addion = NaN;
  }
}

export default App;
