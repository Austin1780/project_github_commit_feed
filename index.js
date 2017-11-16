let gitHub = require('./lib/getRepos.js');
const owner = "Austin1780";
const repo = "assignment_node_dictionary_reader";

gitHub.authenticate();

var resultsObject;

gitHub.getRepos(owner,repo)
  .then(function(results) {
  
    resultsObject= results;
  })
  .catch(function(err) {
    console.error(err);
  })
  .then(function() {
  		 
  		parseData(resultsObject);

  });

function parseData(resultsObject) {
	let sha = [];
	let author=[];
	let url = [];

	for(i=0;i<resultsObject.data.length; i++)
	{

		//console.log(resultsObject.data[i].sha);
		sha[i]=resultsObject.data[i].sha;
		//console.log(resultsObject.data[i].commit.author);
		author[i]=resultsObject.data[i].commit.author;
		//console.log(resultsObject.data[i].url);
		url[i]=resultsObject.data[i].url;
	}

	console.log(sha);
	console.log(author);
	console.log(url);
	

	var currentSha;

}
 

