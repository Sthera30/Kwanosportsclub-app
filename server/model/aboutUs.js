import mongoose from "mongoose";




const aboutUsSchema = mongoose.Schema(

    {

        aboutTitle: {

            type: String,
            required: true
        },

        aboutDescription: {

            type: String,
            required: true

        }

    }

)

export const aboutUsModel = mongoose.model('aboutUs', aboutUsSchema)