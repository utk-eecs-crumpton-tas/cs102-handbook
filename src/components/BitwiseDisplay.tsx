import React from "react";
import "../css/custom.css";

const BitwiseDisplay = ({ number1, number2, operation }) => {
  const applyOperation = (num1, num2, operation) => {
    switch (operation) {
      case "|":
        return num1 | num2;
      // Add more cases for other bitwise operations
      default:
        return 0;
    }
  };

  const formatBinary = (num) => num.toString(2).padStart(8, "0");

  const binary1 = formatBinary(number1);
  const binary2 = formatBinary(number2);
  const result = formatBinary(applyOperation(number1, number2, operation));

  return (
    <div className="bitwise-display">
      {binary1.split("").map((bit, index) => (
        <div key={`num1-${index}`}>{bit}</div>
      ))}
      <div className="operator">{operation}</div>
      {binary2.split("").map((bit, index) => (
        <div key={`num2-${index}`}>{bit}</div>
      ))}
      {[...Array(9)].map((_, index) => (
        <div key={`spacer-${index}`} className="spacer"></div>
      ))}
      <div className="result">
        {result.split("").map((bit, index) => (
          <div key={`result-${index}`}>{bit}</div>
        ))}
      </div>
    </div>
  );
};

export default BitwiseDisplay;
