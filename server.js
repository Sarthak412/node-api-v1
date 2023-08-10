const express = require('express')

const mongoose = require('mongoose')

const AquaticAnimal = require('./models/aquaticAnimalModel')

const app = express();

// Middleware
// This helps our application to understand json
app.use(express.json())


// Routes

// * Route for saving/creating data in the database
app.post('/aquatic-animal', async (req, res) => {
    try {
        const aquaAnimal = await AquaticAnimal.create(req.body)
        res.status(200).json(aquaAnimal)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// * Route for fetching data from the database
app.get('/all-aquatic-animals', async(req, res) => {
    try {
        const aquaAnimals = await AquaticAnimal.find({})
        res.status(200).json(aquaAnimals)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// * Route for fetching data from the database using an ID
app.get('/aquatic-animal/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const aquaAnimalByID = await AquaticAnimal.findById(id);
        res.status(200).json(aquaAnimalByID);    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const PORT = process.env.PORT || 3000

// Personal Mongo Compass
// mongodb+srv://admin:Sarthak4120@cluster1.oguoh5g.mongodb.net/

// Office Mongo Compass 
// mongodb://localhost:27017/
mongoose.connect("mongodb://localhost:27017/aquapedia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the Database...");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
});

