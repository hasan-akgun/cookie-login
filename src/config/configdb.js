const {MongoClient} = require("mongodb")
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE);

const connectDb = async (collectionName) => {
  let collection;
  try {
    await client.connect();
    const database = client.db("login_db");

    console.log("DB Connected")

    return collection = database.collection(collectionName)
  } catch (error) {
    console.log("NOT connected" + error)
  }
}

const closeDb = async () => {
  await client.close()
  console.log("DB Closed");
}

module.exports={connectDb, closeDb}