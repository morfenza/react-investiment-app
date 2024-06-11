export default function UserInput() {
  return (
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
  );
}
