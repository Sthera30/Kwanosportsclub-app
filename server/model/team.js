import mongoose from 'mongoose'


const teamSchema = mongoose.Schema(

    {
        userTeamProfile: {
            type: String,
            required: true
        },

        userTeamName: {
            type: String,
            required: true
        },

        userTeamDescription: {
            type: String,
            required: true
        }
    }
)

export const teamModel = mongoose.model('teams', teamSchema)