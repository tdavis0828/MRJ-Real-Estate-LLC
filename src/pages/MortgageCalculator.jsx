import React, { useState } from "react";
import { StyledCalculator } from "../styles/Stylesheet";
const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(4.25);
  const [loanTerm, setLoanTerm] = useState(30);
  const [additionalPayment, setAdditionalPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;
    const additional = parseFloat(additionalPayment);
    const x = Math.pow(1 + rate, months);
    const monthly = (principal * x * rate) / (x - 1);
    const totalInterest = monthly * months - principal + additional * months;
    setMonthlyPayment(monthly.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  return (
    <StyledCalculator>
      <h1>Mortgage Calculator</h1>
      <form onSubmit={calculateMortgage}>
        <div>
          <label>List Price:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Down Payment:</label>
          <input
            type="number"
            value={additionalPayment}
            onChange={(e) => setAdditionalPayment(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Estimated Monthly Payment: ${monthlyPayment}</h2>
      </div>
      <div className="disclaimer">
        <small>
          *Based on a fully amortized fixed rate loan. Ask your agent for the
          tax rates in your area. Insurance estimate is based on an average
          cost, your final premium cost will be determined by the type of
          coverage you select. This program only provides an estimate.*
        </small>
      </div>
    </StyledCalculator>
  );
};

export default MortgageCalculator;
