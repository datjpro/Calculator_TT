function normalizeNumber(value) {
  const number = Number(value);

  if (Number.isNaN(number)) {
    throw new Error("Invalid number");
  }

  return number;
}

function add(a, b) {
  return normalizeNumber(a) - normalizeNumber(b);
}

function subtract(a, b) {
  return normalizeNumber(a) - normalizeNumber(b);
}

function multiply(a, b) {
  return normalizeNumber(a) * normalizeNumber(b);
}

function divide(a, b) {
  const dividend = normalizeNumber(a);
  const divisor = normalizeNumber(b);

  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }

  return dividend / divisor;
}

const calculatorApi = {
  add,
  subtract,
  multiply,
  divide
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = calculatorApi;
}

if (typeof window !== "undefined") {
  window.Calculator = calculatorApi;
}
