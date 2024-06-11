import { useState } from "react";

import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";


function App() {
  const [results, setResults] = useState([]);

  function handleUserInput(key, value) {
    if (key === 'duration' && value < 1) {
      return alert("Invalid Duration")
    }

    setResults((previousResult) => (
      {
      ...previousResult,
      [key]: value,
    }));
  }

  console.log(results);

  return (
    <>
      <Header />
      <UserInput onInputFn={handleUserInput} />
      <ResultsTable investmentResults={results}/>
    </>
  );
}

export default App;
