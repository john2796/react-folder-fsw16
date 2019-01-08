import React from "react";
import "./App.css";

const HarryProfile = {
  name: "Harry Potter",
  identity: "The Chosen One",
  age: 11,
  bestFriend: "Ron Weasley and Hermione Granger"
};

const RonProfile = {
  name: "Ron Weasley",
  identity: "Youngest Weasley brother, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Hermione Granger"
};

const HermioneProfile = {
  name: "Hermione Granger",
  identity: "Smarty McSmart pants, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Ron Weasley"
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StudentProfile student={HarryProfile} />
        <StudentProfile student={RonProfile} />
        <StudentProfile student={HermioneProfile} />
      </div>
    );
  }
}

const StudentProfile = props => (
  <div
    style={{
      margin: 10,
      border: "1px solid gray",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column"
    }}
  >
    <h1> {props.student.name}</h1>
    <p> {props.student.identity}</p>
    <p> {props.student.age}</p>
    <p> {props.student.bestFriend}</p>
  </div>
);

export default App;
