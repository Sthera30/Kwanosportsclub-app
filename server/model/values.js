import mongoose from "mongoose";


const valuesSchema = mongoose.Schema(

    {
        valuesIcon: {
            type: String,
            required: true
        },

        valuesTitle: {
            type: String,
            required: true
        },

        valuesDescription: {
            type: String,
            required: true
        }
    }
)

export const valueModel = mongoose.model('values', valuesSchema)