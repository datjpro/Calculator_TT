const form = document.querySelector("[data-form]");
const resultText = document.querySelector("[data-result]");
const errorText = document.querySelector("[data-error]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = form.elements.firstNumber.value;
  const secondNumber = form.elements.secondNumber.value;
  const operation = form.elements.operation.value;

  errorText.textContent = "";

  try {
    const result = window.Calculator[operation](firstNumber, secondNumber);
    resultText.textContent = `Ket qua: ${result}`;
  } catch (error) {
    resultText.textContent = "Ket qua: --";
    errorText.textContent = error.message;
  }
});
