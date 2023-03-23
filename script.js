$.getJSON('http://ip-api.com/json', function(data) {
  console.log(JSON.stringify(data, null, 2));
});