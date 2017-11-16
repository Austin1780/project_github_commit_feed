//getRepos module
let Github = require('github');

let github = new Github({});

let authenticate = () => {
  github.authenticate({
	  type: "token",
	  token: "df16de9ae317e60ae60964f419b7a180b19035a6"
  });
}

let getRepos = (owner,repo) => github.repos.getCommits({
      owner,
      repo
      });

module.exports = {getRepos, authenticate};
