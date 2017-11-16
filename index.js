let gitHub = require('./lib/getRepos.js');
const owner = "Austin1780";
const repo = "assignment_node_dictionary_reader";

gitHub.authenticate();

let results = gitHub.getRepos(owner,repo)
  .then(function(results) {
    return results;
  })
  .catch(function(err) {
    console.error(err);
  });

let sha = results[0];

