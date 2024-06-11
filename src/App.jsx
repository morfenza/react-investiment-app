import { useState } from "react";

import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(key, value) {
    if (key === "duration" && value < 1) {
      return alert("Invalid Duration");
    }

    setUserInput((previousUserInput) => ({
      ...previousUserInput,
      [key]: value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputFn={handleUserInput} />
      <ResultsTable userInput={userInput} />
    </>
  );
}

export default App;
