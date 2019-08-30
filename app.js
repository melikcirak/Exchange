const amountElement = document.getElementById("amount");
const firstCurrencyElement = document.getElementById("firstCurrency");
const secondCurrencyElement = document.getElementById("secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstCurrencyElement, secondCurrencyElement);
eventListeners();
function eventListeners() {
  amountElement.addEventListener("input", exchangeCurrency);
  firstCurrencyElement.onchange = function() {
    currency.changeFirstCurrency(
      firstCurrencyElement.options[firstCurrencyElement.options.selectedIndex]
        .textContent
    );
    ui.changeFirst();
  };
  secondCurrencyElement.onchange = function() {
    currency.changeSecondCurrency(
      secondCurrencyElement.options[secondCurrencyElement.options.selectedIndex]
        .textContent
    );
    ui.changeSecond();
  };
}

function exchangeCurrency() {
  currency.changeAmount(amountElement.value);
  currency
    .exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
}
