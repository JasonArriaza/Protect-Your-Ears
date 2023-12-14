// Spotify API
var clientId = '';
var clientSecret = '';
var redirectUri = 'http://127.0.0.1:5500';
var accessToken = window.location.hash.substr(1).split('&')[0].split('=')[1];
localStorage.setItem('access_token', accessToken);


var trackId = '3qQbCzHBycnDpGskqOWY0E';

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

//get track/id

//"https://open.spotify.com/embed/track/1Z4bpgy49F5P9mQrp29OVK?utm_source=generator

//<a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5500&scope=user-read-private user-read-email">Authorize with Spotify</a>