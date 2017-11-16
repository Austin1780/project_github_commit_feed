let gitHub = require("./lib/getRepos.js");
let http = require("http");
let express = require("./lib/express.js");
let router = require("./lib/router");
let url = require("url");
let querystring = require("querystring");

let app = express();
let port = process.env.PORT || 3000;
let host = "localhost";

app.get("/", (req, res) => {});

app.get("/commits", (req, res) => {
  //let userQuery = url.parse(req.url).query;
  //console.log("======");
  //console.log(userQuery);
  let userQuery = querystring.parse(req.url);
  let owner = userQuery["/commits?username"];
  let repo = userQuery["repo"];
  console.log(owner);
  console.log(repo);

  /*gitHub.authenticate();
  gitHub
    .getRepos(owner, repo)
    .then(function(results) {
      resultsObject = results;
    })
    .then(function() {
      resultsObject;
    })
    .catch(function(err) {
      console.error(err);
    });*/
});
/*
app.post('/', (req, res) => {
  res.end('Hello POST!');
});
*/
app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}/`);
});

//const owner = "Austin1780";
//const repo = "assignment_node_dictionary_reader";

var resultsObject;

/*function parseData(resultsObject) {
  let sha = [];
  let author = [];
  let url = [];

  for (i = 0; i < resultsObject.data.length; i++) {
    //console.log(resultsObject.data[i].sha);
    sha[i] = resultsObject.data[i].sha;
    //console.log(resultsObject.data[i].commit.author);
    author[i] = resultsObject.data[i].commit.author;
    //console.log(resultsObject.data[i].url);
    url[i] = resultsObject.data[i].url;
  }

  console.log(sha);
  console.log(author);
  console.log(url);
}*/
