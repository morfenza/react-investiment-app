import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ userInputResults }) {
  let derivedResults = calculateInvestmentResults(userInputResults);

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
        {derivedResults.map((result, resultIndex) => (
          <tr key={`${result}-${resultIndex}`}>
            <th>{result.year}</th>
            <th>{formatter.format(result.valueEndOfYear)}</th>
            <th>{formatter.format(result.interest)}</th>
            <th>{formatter.format(result.annualInvestment)}</th>
            <th>{formatter.format(result.investedCapital)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
