const http = require("http");
const router = require("./router.js");
const fs = require("fs");
let commits = require("../data/commits");
let handlebars = require("handlebars");

const createApplication = () => {
  const app = (req, res) => {
    fs.readFile("index.html", "utf8", function(err, data) {
      let commitString = JSON.stringify(commits, null, 2);
      
      res.writeHead(200, { "Content-Type": "text/html" });
      data = data.replace("{{ commitFeed }}", commitString);

      res.write(data);

      
     // console.log(commitString);
      //console.log("{{ commitFeed }}".replace(commitString));
  

      /*var source   = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {commitFeed: "FFFFFFFFFFFFFF"};
      var html    = template(context);
      */

      router.handle(req, res);
    });
  };

  router.initializeApp(app);

  app.listen = (...args) => {
    const server = http.createServer(app);
    return server.listen.apply(server, args);
  };

  return app;
};

module.exports = createApplication;
