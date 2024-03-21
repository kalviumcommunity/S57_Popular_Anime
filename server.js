const express = require('express');
const mongoose = require('mongoose');
const { connectDB, checkconnection } = require('./db');
const routes = require('./routes');

const app = express();
connectDB();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/', (req, res) => {
  if (checkconnection()) {
    res.send('Database connection status: Connected');
  } else {
    res.send('Database connection status: Connection failed');
  }
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});