const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/lookup', async (req, res) => {
  try {
    const { key, request } = req.query;
    
    const response = await fetch(
      `https://username-userid-to-info.onrender.com/lookup?key=${key}&request=${request}`
    );
    const data = await response.json();

    // ✅ Response modify karo
    data.developer = "@Boss_Hcrr";

    res.json(data);
  } catch (err) {
    res.json({ status: false, error: "Something went wrong" });
  }
});

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(3000);
