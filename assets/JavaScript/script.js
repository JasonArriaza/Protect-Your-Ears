const keywordList = document.querySelector(".keyword-list");
const searchBtn = document.getElementById('search-btn');
const inputBox = document.querySelector(".input");
const resultsBox = document.querySelector(".search-results");
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


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
// Have the user authorize Spotify and get an access token
var clientId = '851808986c0a46ec8232b53e07dfb96e';
var clientSecret = '3ade9d185d544550acd001fd977c5b69';
var redirectUri = 'http://127.0.0.1:5500';
var accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
localStorage.setItem('access_token', accessToken);

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

// Get the value from the search bar, trim it, and then use the value as an input for another function to search for the song
searchBtn.addEventListener('click', () => {
    const searchSong = inputBox.value.trim();

    if (searchSong) {
        console.log("Searching for:", searchSong);
        searchForSpotifyTracks(searchSong);
    }
});

function searchForSpotifyTracks(query) {
    const spotifyApiKey = accessToken;
    const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10&apikey=${spotifyApiKey}`;
    fetch(searchUrl, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
    })
    .then(response => response.json())
    .then(data => {
        displaySearchResults(data.tracks.items);
    })
    .catch(error => {
        console.error('Error grabbing the results', error);
    });
}

// Display the search results
function displaySearchResults(tracks) {
    resultsBox.innerHTML= '';

    tracks.forEach(track => {
        const trackItem = document.createElement('div');

        const trackInfo = `${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`;
        trackItem.innerHTML = `<p>${trackInfo}</p><button class="selectButton" data-trackid="${track.id}">Select</button>`;

        resultsBox.appendChild(trackItem);
    })
}

// Event listener for the "Select" button
resultsBox.addEventListener('click', (event) => {
    if (event.target.classList.contains('selectButton')) {
        const selectedTrackId = event.target.getAttribute('data-trackid');
        fetchTrackInformation(selectedTrackId);
    }
});

// Function to fetch track information based on the selected trackId
function fetchTrackInformation(selectedTrackId) {
    fetch(`https://api.spotify.com/v1/tracks/${selectedTrackId}`, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Track Information:', data);
        // Handle track information
    })
    .catch(error => {
        console.error('Error fetching track data from Spotify', error);
    });
}











// Audiomack results

// function getApi(searchTerm) {
//     const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=album,track,artist`
//     let accessToken = localStorage.getItem('access_token');
           
//     fetch(
//         url, 
//         {
//             headers:  {
//                 Authorization: 'Bearer ' + accessToken
//             }
//         })
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data);
//         })
// }

// var inputEl = document.querySelector("#search-input");
// var searchBtn = document.querySelector("#search-btn");
// searchBtn.addEventListener("click", () => {
//     console.log('clicked!');
//     const searchSong = inputEl.value
//     console.log(searchSong);
//     getApi(searchSong)
// })





//"https://open.spotify.com/embed/track/1Z4bpgy49F5P9mQrp29OVK?utm_source=generator

//<a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5500&scope=user-read-private user-read-email">Authorize with Spotify</a>

