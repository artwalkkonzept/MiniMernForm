import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Record from './Record';

// Some test data for the tests.
const record = {
    id: 42,
    article_title: "Tom",
    article_description: ["ild 1", "ild 2", "ild 3", "ild 4", "ild 5", "ild 6", "ild 7", "ild 8", "ild 9", "ild 10"]
};

it('renders the article_title of the record', () => {
    const comp = <Record getRecord={_ => record}/>;
    const {getByText} = render(comp);
    expect(getByText(record.article_title)).toBeInTheDocument();
});

it('renders the "Article_description" header', () => {
    const comp = <Record getrRecord={_ => record}/>;
    const {getByText} = render(comp);
    expect(getByText("Article_description")).toBeInTheDocument();
});

it('renders each bild', () => {
    const comp = <Record getRecord={_ => record}/>;
    const {getByText} = render(comp);
    record.article_description.forEach(h => expect(getByText(h)).toBeInTheDocument());
});

it('renders the "Back" link', () => {
    const comp = <Record getRecord={_ => record}/>;
    const {getByText} = render(comp);
    expect(getByText(/back/i)).toBeInTheDocument();
});

// Note setup

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db)
        {
          _db = db.db("RecordTest_db");
          console.log("Successfully connected to MongoDB."); 
        }
        return callback(err);
           });
    },
  
    getDb: function () {
      return _db;
    },
  };