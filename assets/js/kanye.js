// KAYNE API
function getKanyeQuote() {
  var requestUrl = "https://api.kanye.rest";

  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      displayKanyeQuote(data.quote);
    })
    .catch(error => {
      console.error("Error fetching Kanye quote:", error);
    });
}
function displayKanyeQuote(quote) {
  var quoteElement = document.getElementById("kanye-quote");
  quoteElement.textContent = `"${quote}" - Kanye West`;
}
getKanyeQuote();
 {
  document.getElementById("get-kanye-quote-btn").addEventListener("click", function() {
    getKanyeQuote();
  });
};


