// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch')
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';


const app = express();

app.use(
  cors({
    origin: '*',
  })
);

// Define a route to handle Musixmatch API requests
app.get('/api/musixmatch/search', async (req, res) => {
  try {
    const apiUrl = 'https://api.musixmatch.com/ws/1.1/';
    const apiKey = 'a868348f6f1b8ad23c86c4a56c3a617e';

    // Extract the query parameter from the request
    const { q_track } = req.query;

    // Build the Musixmatch API URL
    const musixmatchUrl = `${apiUrl}?q_track=${encodeURIComponent(q_track)}&apikey=${apiKey}`;

    // Forward the request to Musixmatch API
    const musixmatchResponse = await fetch(musixmatchUrl);
    const musixmatchData = await musixmatchResponse.json();

    // Send the Musixmatch API response to the client
    res.json(musixmatchData);
  } catch (error) {
    console.error('Error in handling Musixmatch API request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});
