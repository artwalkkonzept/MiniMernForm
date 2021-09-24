const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');

/**** Configuration ****/
const port = process.env.PORT || 8080;
app.use(cors());

/**** Database ****/
const recordDB = require('./record_db')(mongoose);

/**** Routes ****/
app.get('/api/records', async (req, res) => {
    const records = await recordDB.getRecords();
    res.json(records);
});

// "Redirect" all get requests (except for the routes specified above) to React's entry point (index.html) to be handled by Reach router
// It's important to specify this route as the very last one to prevent overriding all of the other routes
app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
);

/**** Start ****/
const url = process.env.MONGO_URL || 'mongodb://localhost/record_db';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async () => {
        await recordDB.bootstrap(); // Fill in test data if needed.
        await app.listen(port); // Start the API
        console.log(`Record API running on port ${port}!`);
    })
    .catch(error => console.error(error));
















    

    /* const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/artwalk_db");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
}); */