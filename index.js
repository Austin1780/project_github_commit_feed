let getRepos = require('./lib/getRepos.js');
const owner = "austin1780";
const repo = "project_github_commit_feed"

var resultGetRepos= getRepos.pull(owner,repo);
console.log("resultGetRepos: \n"+resultGetRepos);


/*
console.log("original getCommits: ");
console.log(getCommits);
*/