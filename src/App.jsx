import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main id="user-input" className="input-group">
        <div>
          <label htmlFor="initial-investment">
            Initial Investiment
            <input
              type="number"
              name="initial-investment"
              id="initial-investment"
            />
          </label>
          <label htmlFor="expected-return">
            Expected Return
            <input type="number" name="expected-return" id="expected-return" />
          </label>
        </div>
        <div>
          <label htmlFor="annual-investment">
            Annual Investiment
            <input
              type="number"
              name="annual-investment"
              id="annual-investment"
            />
          </label>
          <label htmlFor="duration">
            Duration
            <input type="number" name="duration" id="duration" />
          </label>
        </div>
      </main>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tbody>
      </table>
    </>
  );
}

export default App;
