const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:countries-loaded', (event) => {
    this.populate(event.detail)
  })
}

SelectView.prototype.populate = function(array) {
  array.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  })
}

module.exports = SelectView;
