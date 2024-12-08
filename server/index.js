import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { authUser, change_password, create_otp, createAboutUs, createMision, createTeam, createValues, createVision, getAllAboutUs, getAllAboutUsById, getAllMision, getAllMissionById, getAllTeam, getAllTeamsById, getAllValues, getAllValuesById, getAllVision, getAllVisionById, loginUser, logout, register, removeTeam, removeValues, updateAboutUs, updateMission, updateTeam, updateValues, updateVision, verifyEmail, verifyOtp } from "./controller/authController.js";
import { protect } from './middleware/authentication_middleware.js'
import ExpressFormidable from 'express-formidable'
import { uploadImage } from "./controller/imageUploader.js";

//import { protect } from './middleware/auth_middleware.js'


const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Cookies
app.use(cookieParser())

//cors
app.use(cors({

    origin: 'http://localhost:5173',
    credentials: true

}))



//ROUTES
app.post('/upload', ExpressFormidable({ maxFieldsSize: 5 * 2024 * 2023 }), uploadImage)
app.post('/register', register)
app.get("/getUser", protect, authUser)
app.post("/verifyOtp", verifyOtp)
app.post("/changePassword", change_password)
app.post("/verifyEmail", verifyEmail)
app.post('/createOtp', create_otp)
app.post("/login", loginUser)
app.post("/createVision", createVision)
app.get("/getVisionById", getAllVisionById)
app.get("/getAllVision", getAllVision)
app.put("/updateVision", updateVision)
app.post("/createMission", createMision)
app.get("/getMissionById", getAllMissionById)
app.put("/updateMission", updateMission)
app.get("/getAllMission", getAllMision)
//
app.post("/createAboutUs", createAboutUs)
app.get("/getAboutUsById", getAllAboutUsById)
app.put("/updateAboutUs", updateAboutUs)
app.get("/getAllAboutUs", getAllAboutUs)

//

app.post("/createValues", createValues)
app.get("/getValuesById", getAllValuesById)
app.put("/updateValues", updateValues)
app.get("/getAllValues", getAllValues)
app.delete("/removeValues", removeValues)

//

app.post("/createTeam", createTeam)
app.get("/getTeamById", getAllTeamsById)
app.put("/updateTeam", updateTeam)
app.get("/getAllTeam", getAllTeam)
app.delete("/removeTeam", removeTeam)

//
app.post("/logout", logout)




mongoose.connect('mongodb://localhost:27017/userAuthDB').then(() => {

    console.log("connected to the database...");

    app.listen(8081, () => {

        console.log('server is listening at port 8081....');
    })

}).catch((err) => {

    console.log('Failed to connect to the database!', err);
})


/*//handles file uploads, documents etc
app.post("/upload", ExpressFormidable({ maxFieldsSize: 5 * 2024 * 2024 }), uploadImage)
*/
