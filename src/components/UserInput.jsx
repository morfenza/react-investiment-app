export default function UserInput({ onInputFn }) {
  return (
    <section id="user-input" className="input-group">
      <div>
        <label>
          Initial Investiment
          <input
            type="number"
            required
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
            onChange={(event) =>
              onInputFn("duration", event.target.valueAsNumber)
            }
          />
        </label>
      </div>
    </section>
  );
}
