const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
      const primeNumber = event.detail;
      this.displayResult(primeNumber);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
     resultElement.textContent = `Yes! It's a prime number.`;
  } else {
     resultElement.textContent = `Not a prime number`;
  }
};

module.exports = ResultView
