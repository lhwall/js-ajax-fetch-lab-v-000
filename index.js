function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'd0b063215a54457dea2a6bb8e761a8f0012279e3 ';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const personalRepo = "api.github.com/repos/" + repo + "/forks"
  let results =  fetch(personalRepo,
      {
        method: "GET",
        headers: {
          //Authorization: `token ${getToken()}`
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
