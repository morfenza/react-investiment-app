export default function UserInput({ userInput, onInputFn }) {
  return (
    <section id="user-input" className="input-group">
      <div>
        <label>
          Initial Investiment
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputFn("initialInvestment", event.target.valueAsNumber)
            }
          />
        </label>
        <label>
          Expected Return
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputFn("expectedReturn", event.target.valueAsNumber)
            }
          />
        </label>
      </div>
      <div>
        <label>
          Annual Investiment
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputFn("annualInvestment", event.target.valueAsNumber)
            }
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onInputFn("duration", event.target.valueAsNumber)
            }
          />
        </label>
      </div>
    </section>
  );
}
