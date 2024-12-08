import mongoose from 'mongoose'


const visionSchema = mongoose.Schema(

    {
        visionTitle: {
            type: String,
            required: true
        },

        visionDescription: {
            type: String,
            required: true
        }
    }
)

export const visionModel = mongoose.model('visions', visionSchema)