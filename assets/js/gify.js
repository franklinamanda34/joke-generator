//  WORKING GIF AND JOKE API
function searchGif(query) {
  const apiKey = "wNDGimxyBhtWAzxBEFmHmSIQESy89ifV"; // Replace with your Giphy API key
  const mediaFilter = "gif"; // Specify the desired media format (e.g., "gif", "mp4", "webp", etc.)
  const contentFilter = "pg-13"; // Set your preferred content safety rating
  const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=${contentFilter}&media_filter=${mediaFilter}`;
  const locale = "en"; // Specify the language for the joke
  
  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      if (data.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const gifUrl = data.data[randomIndex].images.original.url;
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
  const gifElement = document.getElementById("random-gif");
  gifElement.setAttribute("src", gifUrl);
}

// GIF search based on the user ( Search Bar )
document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const searchQuery = document.getElementById("search-input").value;
  if (searchQuery.trim() !== "") {
    searchGif(searchQuery);
  }
});

searchGif("random"); // Perform an initial search for random GIFs
document.getElementById("get-random-gif-btn").addEventListener("click", function() {
  const searchQuery = document.getElementById("search-input").value;
  if (searchQuery.trim() !== "") {
    searchGif(searchQuery);
  }
});