require('dotenv').config();
const { MongoClient } = require('mongodb');

const connection = async (crudFunc, movieObj) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db('FavMovies');
    const collection = db.collection('Movies');
    // console.log("it's alive");
    await crudFunc(movieObj, collection);
    client.close();
  } catch (error) {
    console.log(error);
  }
};

// connection();

module.exports = connection;
