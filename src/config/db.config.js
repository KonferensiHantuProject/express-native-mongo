// Importing MongoClient from mongodb driver
const { MongoClient } = require('mongodb');

// Env
require('dotenv').config();

// Connecting to a local port
const uri = process.env.DATABASE_URL;

// Client
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Connection
connectToCluster = async () => {
    try {
        
        // Connect
        await client.connect();
        console.log(`Successfully connected to db`);

        // Return Client
        return client;
    }
    catch (err) {
        console.error(`we encountered ${err}`);
        process.exit();
    }
}

module.exports = {
    connectToCluster
}
 