class UI {
  constructor(firstCurrencyElement, secondCurrencyElement) {
    this.firstCurrencyElement = firstCurrencyElement;
    this.secondCurrencyElement = secondCurrencyElement;

    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("outputResult");
  }
  changeFirst() {
    this.outputFirst.textContent = this.firstCurrencyElement.options[
      this.firstCurrencyElement.selectedIndex
    ].textContent;
  }
  changeSecond() {
    this.outputSecond.textContent = this.secondCurrencyElement.options[
      this.secondCurrencyElement.selectedIndex
    ].textContent;
  }
  displayResult(result) {
    this.outputResult.value = result;
  }
}
