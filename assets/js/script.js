// RANDOM JOKE API
function getRandomJoke() {
  var requestUrl = "https://official-joke-api.appspot.com/random_joke";

  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      displayJoke(data);
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
    });
}

function displayJoke(joke) {
  var jokeSetupElement = document.getElementById("joke-setup");
  var jokePunchlineElement = document.getElementById("joke-punchline");

  jokeSetupElement.textContent = joke.setup;
  jokePunchlineElement.textContent = joke.punchline;
}

getRandomJoke();

 {
  document.getElementById("get-joke-btn").addEventListener("click", function() {
    getRandomJoke();
  });
};

  