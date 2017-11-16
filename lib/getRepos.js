//getRepos module
let Github = require('github');


getRepos =  {
	


 pull: function(owner,repo) {
	

    let github = new Github({})

    github.authenticate({
      type: "token",
      token: "c28f65a3098ddf26b564de404d72476051d077be"
    });

    let getCommits = (owner, repo) => github.repos.getCommits({
      owner,
      repo
      });

    getCommits("austin1780", "assignment_building_the_express_router")
      .then(function(results) {
        console.log(results);
        return results;
      })
      .catch(function(err) {
        console.error(err);
      });

    }

}

module.exports = getRepos;
