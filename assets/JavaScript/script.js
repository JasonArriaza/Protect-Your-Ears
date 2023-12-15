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


// Spotify API
//Have user authorize spotify and get access token
var clientId = '';
var clientSecret = '';
var redirectUri = 'http://127.0.0.1:5500';
var accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
localStorage.setItem('access_token', accessToken);


var trackId = '';

async function getProfile() {
    let accessToken = localStorage.getItem('access_token');

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
    console.log('User Profile:', data);
}

// Call the getProfile function
getProfile();

// Fetch track information
fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    method: 'get',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    },
})
    .then(response => response.json())
    .then(data => {
        console.log('Track Information:', data);
    })
    .catch(error => {
        console.error('Error fetching track data from Spotify', error);
    });

// Audiomack results

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





//"https://open.spotify.com/embed/track/1Z4bpgy49F5P9mQrp29OVK?utm_source=generator

//<a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5500&scope=user-read-private user-read-email">Authorize with Spotify</a>

