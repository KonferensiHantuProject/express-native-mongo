// Response Builder
const ResponseBulider = require('../helpers/responseBuilder.helper');

// Database
const { connectToCluster } = require('../config/db.config');

// Dab Variable
let mongoClient;

// All Data
index = async (req, res) => {
    try {

        // Running Connection
        mongoClient = await connectToCluster();

        // Database
        const db = mongoClient.db('admin');
        
        // Collection
        const collection = db.collection('Anu');
        console.log(collection);

        return ResponseBulider.success(res, "Jalan");
    } catch (error) {
        // If Error
        return ResponseBulider.errors(res, 500, error.message);
    }finally{
        // Closing Connection
        await mongoClient.close();
    }
}

module.exports = {
    index
}