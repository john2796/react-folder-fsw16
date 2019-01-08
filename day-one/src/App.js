import React from "react";
import "./App.css";

import test from "../src/components"

const Header = () => <h1>this is a header</h1>;
const SubHeader = () => <p>this is a sub header</p>;

const App = () => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
    </div>
  );
};
export default App;
