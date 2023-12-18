document.addEventListener('DOMContentLoaded', function () {
  // Add a 'click' event listener to the document
  document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'selectButton'
    if (event.target.classList.contains('selectButton')) {
      // Get the button element
      var button = event.target;

      // Get the parent div element
      var parentDiv = button.parentElement;

      // Find the nested <p> tag within the parent div
      var paragraph = parentDiv.querySelector('p');

      // Check if the <p> tag is found
      if (paragraph) {
        // Store the content of the <p> tag in a variable
        var nameOfSong = paragraph.textContent;

        // This code will be executed when an element with the class 'selectButton' is clicked
        console.log('Button clicked!');
        console.log('Name of song:', nameOfSong);
        searchTrack(nameOfSong);

        // Now you can use the variable 'paragraphContent' for further processing
      } else {
        console.error('Nested <p> tag not found within the parent div.');
      }
    }
  });
});


// const access_Token = 'Vl36qyfx2HxTGgowoDGBQP_uFJFVgIYxc7FcrkuGg_-Rs1wb9HZ9I8yXPtrrKLOU';
// const baseUrl = 'https://api.genius.com';

// // Example function to get lyrics for a specific song
// async function getLyrics(songId) {
//   const lyricsUrl = `${baseUrl}/songs/${songId}`;
  
//   try {
//     const response = await fetch(lyricsUrl, {
//       headers: {
//         Authorization: `Bearer ${access_Token}`,
//       },
//     });
//     const data = await response.json();

//     // Display lyrics or handle the data as needed
//     console.log('Lyrics:', data.response.song.lyrics.text);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Example usage
// const exampleSongId = '378195'; // Replace with the actual song ID
// getLyrics(exampleSongId);











































// function searchTrack(songName) {
//   // var apiUrl = 'http://localhost:3000/api/musixmatch/track.search';
//   var apiKey = '';
//   var proxyUrl = 'http://api.allorigins.win/get?url=';
//   var apiUrl = 'https://api.musixmatch.com/ws/1.1/';

//   var apiUrlWithProxy = `${proxyUrl}${apiUrl}?q_track=${encodeURIComponent(songName)}&apikey=${apiKey}`;

//   fetch(apiUrlWithProxy)
//     .then(response => response.json())
//     .then(data => {
//       console.log('MusixMatch API response:', data);
//       const trackId = firstTrack.track_id;

//       // Now you have the track ID, and you can use it to fetch lyrics or perform other operations
//       console.log('Track ID:', trackId);
//     })
//     .catch(error => {
//       console.error('Error in getting Musixmatch data API:', error);
//     });
// }
