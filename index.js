// Import http, node-fetch  module
const http = require('http');
const fetch = require('node-fetch');

// Declare API url in variabl
const apiURL = "https://www.omdbapi.com/?s=terminator&apikey=a22e9054"

// JSON from api is parsed into 'obj'
let obj;

fetch(apiURL)
  .then(response => response.json())
  .then(data => obj = data)
  .then(() => console.log("fetch done"));

const PORT = process.env.PORT || 5000;

http.createServer(function (request,response) {

    response.writeHead(200, {'Content-Type':'text/html'});

    response.write("<table style='border:1px solid black;'>");

    obj.Search.forEach(movie => {
      response.write("<tr>");
      response.write("<td style='border:1px solid black;'>" + movie.Title + "</td>");
      response.write("<td style='border:1px solid black;'>" + movie.Year + "</td>");
      response.write("<td style='border:1px solid black;'><img src='" + movie.Poster + "' style='width:50px;height:75px;'></td>");
      response.write("</tr>");
    });

    response.end("");
}).listen(PORT);
