//getRepos module
let Github = require('github');

let github = new Github({});

let authenticate = () => {
  github.authenticate({
	  type: "token",
	  token: "a56cd86e2fe8f7225dddc77321a249e02d7fff83"
  });
}

let getRepos = (owner,repo) => github.repos.getCommits({
      owner,
      repo
      });

module.exports = {getRepos, authenticate};
