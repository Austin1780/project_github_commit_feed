const http = require('http');
const router = require('./router.js');
const fs = require('fs');

let urlArray = [];

const createApplication = () => {
  const app = (req, res) => {
   
    fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    // router.handle(req, res);
});

  }

  router.initializeApp(app);

  app.listen = (...args) => {
    const server = http.createServer(app);
    return server.listen.apply(server, args);
  };

  return app;
}

module.exports = createApplication;