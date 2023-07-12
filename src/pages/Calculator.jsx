import React, { useState } from "react";
import { StyledCalculator } from "../styles/Stylesheet";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(3.6);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [downPayment, setdownPayment] = useState(15000);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount - downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;
    const x = Math.pow(1 + rate, months);
    const monthly = (principal * x * rate) / (x - 1);
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <StyledCalculator>
      <div className="overlay" />

      <div>
        <form onSubmit={calculateMortgage}>
          <h1>Mortgage Calculator</h1>

          <div>
            <label>Lising price:</label>
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
              value={downPayment}
              onChange={(e) => setdownPayment(e.target.value)}
            />
          </div>
          <button type="submit">Calculate</button>
          <div>
            <p>
              Estimated Monthly Payment: <strong>${monthlyPayment}</strong>
            </p>
          </div>
        </form>
      </div>
    </StyledCalculator>
  );
}

export default Calculator;
