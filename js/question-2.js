
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
                <p>Tag no. ${[i]}<p>
            </div>`;
        }
    } catch (error) {
        resultContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getGames();


// So I see that the Tag no. starts at 0 and not 1. 
// I'd have to either code it to skip the first index (including game) with this code or make a new for-loop exclusively for the numbers to fix this, right? or is it an easier way to do this? I may be overcomplicating stuff.
// I'd love to see an example! It'd help me understand.

