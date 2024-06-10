import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(input, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  );
}

export default App;
