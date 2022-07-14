import React, { useState } from "react";
import Header from "./Header";
function App() {
  // let name = "Durgesh";
  // let age = 25;
  const [age, setAge] = useState(25);
  const [name, setName] = useState("Durgesh");
  const incAge = () => {
    setAge(age + 1);
  };

  const changeName = () => {
    if (name === "Durgesh") {
      setName("Ritesh");
    } else {
      setName("Durgesh");
    }
  };

  return (
    <div>
      <p>Hi I am App Component</p>
      <button onClick={incAge}>Inc Age</button>
      <Header name={name} age={age} place="Mumbai" change_name={changeName} />
    </div>
  );
}

export default App;
