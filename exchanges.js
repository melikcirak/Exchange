class Currency {
  constructor(firstCurrencyElement, secondCurrencyElement) {
    //=>USD-TRY bilgisi buraya gelmiş olucak.
    this.firstCurrencyElement = firstCurrencyElement;
    this.secondCurrencyElement = secondCurrencyElement;
    this.url = "https://api.exchangeratesapi.io/latest?base=";
    this.amountElement = null;
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrencyElement)
        .then(response => response.json())
        .then(data => {
          const parity = data.rates[this.secondCurrencyElement];
          const amount2 = Number(this.amountElement);
          let total = parity * amount2;
          resolve(total);
        })
        .catch(err => reject(err));
    });
  }
  //İnputlar değiştikçe değerleri güncelleyeceğiz.
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrencyElement = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrencyElement = newSecondCurrency;
  }
  changeAmount(newAmount) {
    this.amountElement = newAmount;
  }
}
