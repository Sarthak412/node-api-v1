const mongoose = require('mongoose')


const aquaticAnimalSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the aquatic animal name."]
        },
        scientific_name: {
            type: String,
            required: [true, "Please enter the scientific name for the aquatic animal."]
        },
        size: {
            length: {
                type: String,
                required: true
            },
            weight: {
                type: String,
                required: true
            }
        },
        description: {
            type: String,
            required: true
        },
        interesting_facts: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
)

const aquaModel = mongoose.model('aquaModel', aquaticAnimalSchema);

module.exports = aquaModel;
