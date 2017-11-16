//getRepos module
let Github = require('github');

let github = new Github({});

let authenticate = () => {
  github.authenticate({
	  type: "token",
	  token: "65c2645ac74fc58055052fa6ebf1d0234397c106"
  });
}

let getRepos = (owner,repo) => github.repos.getCommits({
      owner,
      repo
      });

module.exports = {getRepos, authenticate};
