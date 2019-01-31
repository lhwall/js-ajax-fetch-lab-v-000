function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //LHW
  return 'f86718ac59c1d4c5c1315ba30a67f55280aab2d3';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const personalRepo = "api.github.com/repos/" + repo + "/forks"
  debugger
  let results =  fetch(personalRepo,
      {
        method: "POST",
        headers: {
          Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())

  showResults(results)
}

function showResults(json) {
  //use this function to display the results from forking via the API
  repo = json.html_url
  document.getElementById("results").innerHTML = `<a href="${repo}">${repo}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
