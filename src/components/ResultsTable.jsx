import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ userInput }) {
  let derivedResults = calculateInvestmentResults(userInput);

  return (
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
        {derivedResults.map((result) => (
          <tr key={`${result.year}`}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
            <td>{formatter.format(result.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
