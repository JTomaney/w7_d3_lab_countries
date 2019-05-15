const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    // console.log(xhr.status);
    if (xhr.status !== 200) {
      return
    }
    console.log(xhr.responseText);
    const jsonString = xhr.responseText
    const data = JSON.parse(jsonString)
    // console.log(data);
    onComplete(data);
  } )

  xhr.open('GET', this.url)
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.send()

};

module.exports = RequestHelper;
