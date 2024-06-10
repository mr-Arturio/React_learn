import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(input, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a valid duration</p>}
    </>
  );
}

export default App;
