const AquaticAnimal = require('../models/aquaticAnimalModel')

// * Logic for saving/creating data in the database
const createAquaticAnimal = async (req, res) => {
    try {
        const aquaAnimal = await AquaticAnimal.create(req.body)
        res.status(200).json(aquaAnimal)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}

// * Logic for fetching data from the database
const getAllAnimals = async(req, res) => {
    try {
        const aquaAnimals = await AquaticAnimal.find({})
        res.status(200).json(aquaAnimals)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }   
}

// * Logic for fetching data from the database using an ID
const getAquaticAnimalByID = async(req, res) => {
    try {
        const {id} = req.params;
        const aquaAnimalByID = await AquaticAnimal.findById(id);
        res.status(200).json(aquaAnimalByID);    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// * Logic for updating data from the database using an ID
const updateAquaticAnimalByID = async (req, res) => {
    try {
        const {id} = req.params;
        const aqua_animal = await AquaticAnimal.findByIdAndUpdate(id, req.body);
        // We cannot find product in the DB
        if(!aqua_animal){
            return res.status(404).json({message: `Cannot find any aquatic animal with ID: ${id}`})
        }
        const updatedAquaAnimal = await AquaticAnimal.findById(id);
        res.status(200).json(updatedAquaAnimal);
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// * Logic for deleting data from the database using an ID
const deleteAquaticAnimalByID = async (req, res) => {
    try {
        const {id} = req.params;
        const aqua_animal = await AquaticAnimal.findByIdAndDelete(id);

        if(!aqua_animal){
            return res.status(404).json({message: `Cannot find any aquatic animal with ID: ${id}`})
        }
        res.status(200).json(aqua_animal)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createAquaticAnimal,
    getAllAnimals,
    getAquaticAnimalByID,
    updateAquaticAnimalByID,
    deleteAquaticAnimalByID
}