require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/api/ready', (req, res) => {
  try {
    res.json({ status: 'ready' });
  } catch (err) {
    res.json({ status: 'not ready' });
  }
});

app.get('/api/users', (req, res) => res.json({ message: 'GET /api/users WIP' }));
app.get('/api/users/:_id/logs', (req, res) => res.json({ message: 'GET /api/users/_id/logs WIP'}));

app.post('/api/users', (req, res) => res.json({ message: 'POST /api/users WIP' }));
app.post('/api/users/:_id/exercises', (req, res) => res.json({ message: 'POST /api/users/_id/exercises WIP' }));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
