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

        // Get All Data
        const data = await collection.find().toArray();

        return ResponseBulider.success(res, data);
    } catch (error) {
        // If Error
        return ResponseBulider.errors(res, 500, error.message);
    }finally{
        // Closing Connection
        await mongoClient.close();
    }
}

// Create Data
create = async (req, res) => {
    try {

        // Running Connection
        mongoClient = await connectToCluster();

        // Database
        const db = mongoClient.db('admin');
        
        // Collection
        const collection = db.collection('Anu');

        // Prepare Data
        const dataCollection = {
            name: req.body.name,
            date_of_birth: req.body.date_of_birth,
            age: req.body.age,
        }

        // Create New Data
        const data = await collection.insertOne(dataCollection);

        return ResponseBulider.success(res, data);
    } catch (error) {
        // If Error
        return ResponseBulider.errors(res, 500, error.message);
    }finally{
        // Closing Connection
        await mongoClient.close();
    }
}

// Update Data
update = async (req, res) => {
    try {

        // Running Connection
        mongoClient = await connectToCluster();

        // Database
        const db = mongoClient.db('admin');
        
        // Collection
        const collection = db.collection('Anu');

        // Prepare Data
        const updateDataCollection = {
            name: req.body.name,
            date_of_birth: req.body.date_of_birth,
            age: req.body.age,
        }

        // Create New Data
        const data = await collection.updateMany({ _id: req.params._id }, { $set: updateDataCollection });

        return ResponseBulider.success(res, data);
    } catch (error) {
        // If Error
        return ResponseBulider.errors(res, 500, error.message);
    }finally{
        // Closing Connection
        await mongoClient.close();
    }
}

module.exports = {
    index,
    create,
    update
}