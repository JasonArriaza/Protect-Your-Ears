const keywordList=document.querySelector(".keyword-list")
const searchBtn= document.getElementById("search-btn")
const inputEL= document.querySelector(".input")

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

// for (let i = 0; i < availableKeywords.length; i++) {
//    const btn=document.createElement("button")
//    btn.textContent=availableKeywords[i]
//     keywordList.append(btn)
// }

// keywordList.addEventListener("click", (e)=>{
//     e.preventDefault()
//     const artist= this.event.target.textContent
//     console.log(artist);
// })

const resultsBox = document.querySelector(".search-results")
const inputBox = document.querySelector(".input")

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });

    console.log(result);

    }
    display(result);
}

function display (result){
    const content = result.map((list)=>{
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>"
}

// Spotify API

var clientId = '851808986c0a46ec8232b53e07dfb96e';
var clientSecret = '73dfd0082e9b45d3a4f35128439e180c';
var redirectUri = 'http://127.0.0.1:5500';
var accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
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

    // Audiomack results

    function getApi(song){
        const url=`https://api.audiomack.com/v1/search?q=${song}`
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data);
        })
    }

    searchBtn.addEventListener("click", ()=>{
        const searchSong=inputEL.value
        console.log(searchSong);
        getApi(searchSong)
    })

    

//get track/id

//"https://open.spotify.com/embed/track/1Z4bpgy49F5P9mQrp29OVK?utm_source=generator

//<a href="https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:5500&scope=user-read-private user-read-email">Authorize with Spotify</a>

