const express = require('express');

const AquaticAnimal = require('../models/aquaticAnimalModel');

const { createAquaticAnimal, getAllAnimals, getAquaticAnimalByID, updateAquaticAnimalByID, deleteAquaticAnimalByID } = require('../controller/dataController')

const router = express.Router();

// Routes
// * Route for saving/creating data in the database
router.post('/aquatic-animal', createAquaticAnimal)

// * Route for fetching data from the database
router.get('/all-aquatic-animals', getAllAnimals)

// * Route for fetching data from the database using an ID
router.get('/aquatic-animal/:id', getAquaticAnimalByID)

// * Route for updating data from the database using an ID
router.put('/aquatic-animal/:id', updateAquaticAnimalByID)

// * Route for deleting data from the database using an ID
router.delete('/aquatic-animal/:id', deleteAquaticAnimalByID);

module.exports = router;