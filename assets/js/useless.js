// USELESS FACTS API
document.getElementById("factBtn").addEventListener("click", function() {
  getRandomUselessFact();
});
function getRandomUselessFact() {
  const requestURL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      if (data && data.text) {
        const fact = data.text;
        displayFact(fact);
      } else {
        console.error('Error fetching useless fact: Invalid response data');
      }
    })
    .catch(error => {
      console.error('Error fetching useless fact:', error);
    });
}
function displayFact(fact) {
  document.getElementById("factDisplay").textContent = 'Random Useless Fact:\n' + fact;
}
