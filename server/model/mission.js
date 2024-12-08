import mongoose from 'mongoose'


const missionSchema = mongoose.Schema(

    {
        missionTitle: {
            type: String,
            required: true
        },

        missionDescription: {
            type: String,
            required: true
        }
    }
)

export const missionModel = mongoose.model('missions', missionSchema)