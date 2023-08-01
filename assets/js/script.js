// Joke Generator API
$(document).ready(function () {
    function getRandomJoke() {
      const requestUrl = "https://official-joke-api.appspot.com/random_joke";
      
      $.ajax({
        url: requestUrl,
        method: "GET",
        success: function (data) {
          displayJoke(data);
        },
        error: function (error) {
          console.error("Error fetching joke:", error);
        }
      });
    }
    function displayJoke(joke) {
      const jokeSetupElement = $("#joke-setup");
      const jokePunchlineElement = $("#joke-punchline");
  
      jokeSetupElement.text(joke.setup);
      jokePunchlineElement.text(joke.punchline);
    }
    getRandomJoke();
    $("#get-joke-btn").on("click", function () {
      getRandomJoke();
    });
  });
  
  