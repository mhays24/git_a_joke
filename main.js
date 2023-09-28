function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      const joke = `${data.setup}\n\n${data.punchline}`;
      const jokeContainer = document.getElementById("joke-container");
      jokeContainer.innerHTML = `<pre>${joke}</pre>`;
    });
}

const jokeButton = document.getElementById("joke-button");
jokeButton.addEventListener("click", fetchJoke);
