let gitHub = require("./lib/getRepos.js");
let http = require("http");
let express = require("./lib/express.js");
let router = require("./lib/router");

let app = express();
let port = process.env.PORT || 3000;
let host = "localhost";

app.get("/", (req, res) => {
  console.log("inside get");
  res.end("Hello GET!");
});
/*
app.post('/', (req, res) => {
  res.end('Hello POST!');
});
*/
app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}/`);
});

const owner = "Austin1780";
const repo = "assignment_node_dictionary_reader";

gitHub.authenticate();

var resultsObject;

gitHub
  .getRepos(owner, repo)
  .then(function(results) {
    resultsObject = results;
  })
  .then(function() {
    parseData(resultsObject);
  })
  .catch(function(err) {
    console.error(err);
  });

function parseData(resultsObject) {
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

  //console.log(sha);
  //console.log(author);
  //console.log(url);
}
