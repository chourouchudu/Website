        function httpGetAsync(url, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
       callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
     xmlHttp.send(null);
  }

  const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=ae59ca2a92794ddda8702b5f56b382b9"
