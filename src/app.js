const CountriesData = require('./models/countries_data.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countriesData = new CountriesData();
  countriesData.getData();
  const countrySelector = document.querySelector('#countries');
  const selectView = new SelectView(countrySelector);
  selectView.bindEvents();
});
