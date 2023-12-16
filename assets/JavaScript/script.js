const keywordList = document.querySelector(".keyword-list");
const inputBox = document.querySelector(".input");
const resultsBox = document.querySelector(".search-results");

let availableKeywords = [
    'Tyler the Creator',
    'Wu-Tang Clan',
    'Outkast',
    'Drake',
    'Childish Gambino',
    'Future',
    'J. Cole',
    'Kendrick Lamar',
    'Eminem',
    'Griselda',
    'Michael Jackson',
    'Kanye West',
];

// Function to handle input and display search results
inputBox.addEventListener("input", function () {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);
});

// Function to display search results
function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";

    // Add event listener to each suggestion
    const suggestionItems = resultsBox.querySelectorAll("li");
    suggestionItems.forEach((item) => {
        item.addEventListener("click", () => {
            inputBox.value = item.textContent;
            resultsBox.innerHTML = "";
        });
    });
}

function navigateToProtectYears() {
    window.location.href = 'Protectyears.html';
}

// Spotify API

var clientId = 
var clientSecret = 
var redirectUri = 'http://127.0.0.1:5500';
var accessToken = 
localStorage.setItem('access_token', accessToken);

// Spotify Results for Artist, Track, and Album


function getApi(searchTerm) {
    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=album,track,artist`
    let accessToken = localStorage.getItem('access_token');
           
    fetch(
        url, 
        {
            headers:  {
                Authorization: 'Bearer ' + accessToken
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
}

var inputEl = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
    console.log('clicked!');
    const searchSong = inputEl.value
    console.log(searchSong);
    getApi(searchSong)

})

//get track/id

//"https://open.spotify.com/embed/track/1Z4bpgy49F5P9mQrp29OVK?utm_source=generator

//<a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5500&scope=user-read-private user-read-email">Authorize with Spotify</a>

// Spotify Reults for Page 2

var songSearchEl = document.querySelector("#result-list")
var moreSongsBtn = document.querySelector("#load-songs");

moreSongsBtn.addEventListener("click", () =>{
    resultsNum(3);
})

var songSearchEl = document.querySelector("#result-list")
var moreSongsBtn = document.querySelector("#load-songs");

moreSongsBtn.addEventListener("click", () =>{
    resultsNum(3);
})

var resultsNum = (searchTerm = 5) => {
    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=album,track,artist`;
    let accessToken = localStorage.getItem('access_token');

    fetch(
        url,
        {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        .then(async (response) => {
            const data = await response.json();

            // Assuming you have a container in your HTML to display the results
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear previous results

            // Check if there are items in the response
            if (data.items && data.items.length > 0) {
                for (let item of data.items) {
                    console.log(item);

                    // Create a new element for each result
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item'); // Add a class for styling, adjust as needed

                    // Assuming you want to display the name of each item
                    const itemName = document.createElement('p');
                    itemName.innerText = item.name;
                    resultItem.appendChild(itemName);

                    // Add more elements to display additional information as needed

                    // Append the result item to the container
                    resultsContainer.appendChild(resultItem);
                }
            } else {
                // Handle the case where there are no results
                console.log('No results found.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}