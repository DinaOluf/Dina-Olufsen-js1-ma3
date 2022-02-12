
// Question 2

const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ac81ef8728c145a584452ce8a279d7fd";

const resultContainer = document.querySelector(".result");

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

async function getGames() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const games = data.results;

        resultContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            resultContainer.innerHTML += `<div class="result-style">
                <h2>${games[i].name}<h2>
                <p>Rating: ${games[i].rating} <p>
                <p>Tag no. ${games[i].tags.length}<p>
            </div>`;
        }
    } catch (error) {
        resultContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getGames();




