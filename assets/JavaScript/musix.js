document.getElementById('searchResults').addEventListener('click', function (event) {
    if (event.target.classList.contains('selectButton')) {
      const selectedTrackName = event.target.getAttribute('data-trackname');
  
      console.log('Selected Track Name:', selectedTrackName);
  
      searchForTrackId(selectedTrackName);
    }
  });
  
  function searchForTrackId(trackName) {

  
    const apiKey = '';
    const searchUrl = `https://api.musixmatch.com/ws/1.1/track.search?q=${trackName}&apikey=${apiKey}`;
  
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        const trackId = data.message.body.track_list[0].track.track_id;
  
        console.log('Track ID:', trackId);
  
        fetchAndDisplayLyrics(trackId);
      })
      .catch(error => {
        console.error('Error fetching track ID from Musixmatch', error);
      });
  }
  
  function fetchAndDisplayLyrics(trackId) {
  
    const apiKey = '';
    const lyricsUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`;
  
    // Use fetch to send the API request
    fetch(lyricsUrl)
      .then(response => response.json())
      .then(data => {
        // Extract the lyrics from the API response (adjust this based on the Musixmatch API response structure)
        const lyrics = data.message.body.lyrics.lyrics_body;
  
        // Log or display the obtained lyrics
        console.log('Lyrics:', lyrics);
        //Display the lyrics on your page or perform any other necessary actions
      })
      .catch(error => {
        console.error('Error fetching lyrics from Musixmatch', error);
      });
  }
  