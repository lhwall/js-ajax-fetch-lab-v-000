function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '8addcf046f47e9d37d6b2fc04d23d8fa1a01c9d0';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const personalRepo = "api.github.com/repos/" + repo + "/forks"
  let results =  fetch(personalRepo,
      {
        method: "POST",
        headers: {
          Authorization: `token '771e9aa5611c9a478792b64ec381944b8f00e477 '`
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
