
// Question 2
/*
async function getGames() {
    const response = await fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ac81ef8728c145a584452ce8a279d7fd");
    const results = await response.json();
    console.log(results);

    let html = "";

    for(let i = 0; i < results.length; i++) {
        if (i === 8) {
            break
        }

        html += `<div class="result-style">Name: ${results[i].name} Rating: ${results[i].rating} Tag no. ${[i]}</div>`;
    }
}

const html = document.querySelector("html");
html.innerHTML = getGames();*/

// ^ Feil




/* Under denne er riktig - tatt fra https://github.com/NoroffFEU/get-request-with-regular-promise-syntax og https://vimeo.com/450776515/1adda6b1fd. */



/*const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ac81ef8728c145a584452ce8a279d7fd";

const resultContainer = document.querySelector(".result");


function createHTML(results) {
    const games = results.all;

    resultContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            resultContainer.innerHTML += `<div class="result">${games[i].text}</div>`;
        }
}

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const games = data.all;

        createHTML(games);

    } catch (error) {
        resultContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getGames();*/


