export default function UserInput({ onInputFn }) {
  return (
    <main id="user-input" className="input-group">
      <div>
        <label htmlFor="initial-investment">
          Initial Investiment
          <input
            type="number"
            name="initial-investment"
            id="initial-investment"
            onChange={(event) =>
              onInputFn("initial-investiment", event.target.value)
            }
          />
        </label>
        <label htmlFor="expected-return">
          Expected Return
          <input
            type="number"
            name="expected-return"
            id="expected-return"
            onChange={(event) =>
              onInputFn("expected-return", event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="annual-investment">
          Annual Investiment
          <input
            type="number"
            name="annual-investment"
            id="annual-investment"
            onChange={(event) =>
              onInputFn("annual-investment", event.target.value)
            }
          />
        </label>
        <label htmlFor="duration">
          Duration
          <input
            type="number"
            name="duration"
            id="duration"
            onChange={(event) => onInputFn("duration", event.target.value)}
          />
        </label>
      </div>
    </main>
  );
}
