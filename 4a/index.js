const express = require('express');
require('dotenv').config();
const mockMiddles = require('./middlewares/mockMiddles');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoute = require('./controllers/blog')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/blog',blogRoute)

const password = encodeURIComponent('999344');
const connectionString = `mongodb+srv://chenghaohuang88:${password}@task4.1gf58so.mongodb.net/v4?retryWrites=true&w=majority`;
mongoose.connect(connectionString)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
