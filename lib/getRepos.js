//getRepos module
require("dotenv").config();

let Github = require("github");
let github = new Github({});

let authenticate = () => {
  github.authenticate({
    type: "token",
    token: process.env.DB_API
  });
};

let getRepos = (owner, repo) =>
  github.repos.getCommits({
    owner,
    repo
  });

module.exports = { getRepos, authenticate };
