const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

CountriesData = function() {
  this.list = null


}

CountriesData.prototype.getData = function() {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all')
  request.get(data => {
    this.list = data
    // console.log(this.list);
    PubSub.publish('CountriesData:countries-loaded', this.list)
  });
}

module.exports = CountriesData;
