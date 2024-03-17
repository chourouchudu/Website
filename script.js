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

  const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=460f069aa078439281d8bda8e78ec5cc"
