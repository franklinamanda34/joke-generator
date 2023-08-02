// Kayne API
function getKanyeQuote() {
  const requestUrl = "https://api.kanye.rest";

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
  const quoteElement = document.getElementById("kanye-quote");
  quoteElement.textContent = `"${quote}" - Kanye West`;
}
getKanyeQuote();
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("quoteBtn").addEventListener("click", function() {
    getKanyeQuote();
  });
});


