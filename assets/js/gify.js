//  WORKING GIF API
function searchGif(query) {
  var apiKey = "wNDGimxyBhtWAzxBEFmHmSIQESy89ifV"; // Replace with your Giphy API key
  var mediaFilter = "gif"; // Specify the desired media format (e.g., "gif", "mp4", "webp", etc.)
  var contentFilter = "pg-13"; // Set your preferred content safety rating
  var requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=${contentFilter}&media_filter=${mediaFilter}`;
  var locale = "en"; // Specify the language for the joke
  
  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      if (data.data.length > 0) {
        var randomIndex = Math.floor(Math.random() * data.data.length);
        var gifUrl = data.data[randomIndex].images.original.url;
        displayRandomGif(gifUrl);
      } else {
        console.log("No GIFs found for the search term:", query);
      }
    })
    .catch(error => {
      console.error("Error fetching random GIF:", error);
    });
}
function displayRandomGif(gifUrl) {
  var gifElement = document.getElementById("random-gif");
  gifElement.setAttribute("src", gifUrl);
}
document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var searchQuery = document.getElementById("search-input").value;
  if (searchQuery.trim() !== "") {
    searchGif(searchQuery);
  }
});
document.getElementById("get-random-gif-btn").addEventListener("click", function() {
 
  var searchQuery = document.getElementById("search-input").value;
  
  if (searchQuery.trim() !== "") {
    searchGif(searchQuery);
  } else {
    searchGif("random");
  }
});
searchGif("random"); // Display a random GIF 