function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const personalRepo = "api.github.com/repos/" + repo + "/forks"
    fetch(personalRepo,
      {
        method: "POST",
        headers: {
          Authorization: `token`
      }
    }
  ).then(res => res.json())
}

function showResults(json) {
  //use this function to display the results from forking via the API
  repo = forkRepo.json.html_url
  document.getElementById("results").innerHTML = `<a href="${repo}">${repo}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
