let chuckNorrisAPI = "https://api.chucknorris.io/jokes/random";
let jokeContainer = document.querySelector("h2");
let updateButton = document.querySelector("button");

function getRandomJoke() {
  getJSON(chuckNorrisAPI, function (data) {
    jokeContainer.textContent = data.value;
  });
}

updateButton.addEventListener("click", getRandomJoke);

function getJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error:", error));
}
getRandomJoke();
