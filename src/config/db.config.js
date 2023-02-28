// Importing MongoClient from mongodb driver
const { MongoClient } = require('mongodb');
 
// Connecting to a local port
const uri = 'mongodb://127.0.0.1:27017';

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
 