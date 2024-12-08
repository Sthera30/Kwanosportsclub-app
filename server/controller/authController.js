import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import genOTP from 'otp-generator'
import dotenv from 'dotenv'
import { userModel } from '../model/user.js'
import { hashPassword, hasConfrimPassword, hashOtp, compareOtp, comparePassword } from '../security/security.js'
import { otpModel } from '../model/otp.js'
import { visionModel } from '../model/vision.js'
import { missionModel } from '../model/mission.js'
import { aboutUsModel } from '../model/aboutUs.js'
import { valueModel } from '../model/values.js'
import { teamModel } from '../model/team.js'
dotenv.config()


export const register = async (req, res) => {

    const { name, email, password, confirmPassword } = req.body

    try {

        if (!name) {
            return res.status(200).json({ error: 'Name is required!', success: false })
        }

        if (!email) {
            return res.status(200).json({ error: 'email is required!', success: false })
        }

        if (!password || password.length < 6) {
            return res.status(200).json({ error: 'password is required and must be atleast 6 characters!', success: false })
        }

        if (!confirmPassword || confirmPassword.length < 6) {
            return res.status(200).json({ error: 'confirm password is required and must be atleast 6 characters!', success: false })
        }

        const match = await userModel.findOne({ email })

        if (match) {
            return res.status(200).json({ error: 'Email already exists!', success: false })
        }

        if (password === confirmPassword) {


            //Increase security
            const hashPass = await hashPassword(password)
            const hashConfirmPass = await hasConfrimPassword(confirmPassword)

            const user = await userModel.create({ name: name, email: email, password: hashPass, confirmPassword: hashConfirmPass })


            //JWT stores user information

            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {

                expiresIn: '1d'

            })


            //lets store the token in a cookie

            res.cookie('token', token, {
                httpOnly: false,
                secure: false,
            })


            return res.status(200).json({
                message: 'Successfully registered!', success: true, data: {
                    user: user,
                    token

                }
            })

        }

        else {
            return res.status(200).json({ error: 'Passwords do not match!', success: false })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to register', success: false })
    }

}


export const authUser = async (req, res) => {

    try {

        /*  const email = 'tinisthera@gmail.com'
  
          console.log(email);
          */

        const user = await userModel.findOne({ email: req.user.email })

        if (!user) {
            return res.status(200).json({ error: 'User not found!', success: false })

        }

        return res.status(200).json({
            message: 'User Found!', success: true, data: {
                user: user
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(200).json({ error: 'Failed Authenticating User!', success: false })
    }


}


export const create_otp = async (req, res) => {

    const { email } = req.body

    try {

        const otpGen = genOTP.generate(6, {

            digits: true,
            lowerCase: false,
            upperCase: false,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        })

        const hashedOtp = await hashOtp(otpGen)

        await otpModel.create({ otp: hashedOtp, userEmail: email })

        const transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {

                user: 'tinisthera@gmail.com',
                pass: 'evhrsmudgmuasuxk'

            }

        })

        const mailOptions = {

            from: 'Food Eats Team',
            to: email,
            subject: 'OTP Verification Code',
            text: `${otpGen} is your verification code`

        }

        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {
                return res.status(200).json({ error: 'Failed sending an email....', success: false })
            }

            return res.status(200).json({ message: 'Email sent...!', success: true })
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}


export const verifyOtp = async (req, res) => {

    const { otp, email } = req.body

    if (!otp) {
        return res.status(200).json({ error: 'OTP is required!', success: false })
    }

    if (otp.length != 6) {
        return res.status(200).json({ error: 'OTP must be 6 digits!', success: false })
    }

    try {

        const otp_ = await otpModel.findOne({ userEmail: email })

        const user = await userModel.findOne({ email: email })

        user.isVerified = true

        await user.save()

        // console.log(`Hello ${otp_}`);


        const isMatch = await compareOtp(otp, otp_.otp)


        if (!isMatch) {
            return res.status(200).json({ error: 'OTP Do Not Match!', success: false })
        }

        await otpModel.deleteOne({ otp: otp_.otp })

        return res.status(200).json({
            message: 'OTP Verified!', success: true, data: {
                otp_: otp_
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}


export const verifyEmail = async (req, res) => {

    const { email } = req.body

    if (!email) {
        return res.status(200).json({ error: 'Email is required!', success: false })
    }

    try {


        const otpGen = genOTP.generate(6, {

            digits: true,
            upperCase: false,
            lowerCase: false,
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false

        })

        const hashedOtp = await hashOtp(otpGen)


        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tinisthera@gmail.com',
                pass: 'evhrsmudgmuasuxk'
            }
        })

        const mailOptions = {
            from: 'Food Eats Team',
            to: email,
            subject: 'OTP Verification Code',
            text: `${otpGen} is your verification code`
        }

        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {
                return res.status(200).json({ error: 'Failed sending an email...', success: false })
            }

            return res.status(200).json({ message: 'OTP sent successfully!', success: true })

        })


        const user_email = await userModel.findOne({ email })

        if (!user_email) {
            return res.status(200).json({ error: 'Please first register email address!', success: false })
        }

        await otpModel.create({ otp: hashedOtp, userEmail: email })


        return res.status(200).json({
            message: 'OTP sent to your email address!', success: true, data: {
                user_email: user_email
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}


export const change_password = async (req, res) => {

    const { currentPassword, newPassword, email } = req.body


    if (!currentPassword || !currentPassword.length > 6) {
        return res.status(200).json({ error: 'Current password is required and must be atleast 6 characters long!', success: false })
    }

    if (!newPassword || !newPassword.length > 6) {
        return res.status(200).json({ error: 'New password is required and must be atleast 6 characters long!!', success: false })
    }


    try {

        const user = await userModel.findOne({ email: email })

        if (user.isVerified) {

            if (currentPassword === newPassword) {

                const hashCurrentPassword = await hashPassword(currentPassword)
                const hashNewPassword = await hasConfrimPassword(newPassword)

                user.password = hashCurrentPassword || user.password
                user.confirmPassword = hashNewPassword || user.confirmPassword

                await user.save()

                return res.status(200).json({ message: 'Password changed successfully!', success: true })
            }

            else {
                return res.status(200).json({ error: 'Passwords Do Not Match!', success: false })
            }

        }

        else {
            return res.status(200).json({ error: 'Please verify your OTP sent to your email!', success: false })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}

export const loginUser = async (req, res) => {

    const { password, email } = req.body

    try {

        if (!email) {
            return res.status(200).json({ error: 'Email is required!', success: false })
        }

        if (!password) {
            return res.status(200).json({ error: 'Password is required!', success: false })
        }

        const user = await userModel.findOne({ email: email })



        if (!user) {
            return res.status(200).json({ error: 'invalid login details!', success: false })
        }

        //Used to store user info
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        //Store token in cookie

        res.cookie('token', token, {

            httpOnly: true,
            secure: true

        })

        //compare passwords

        const isMatch = await comparePassword(password, user.password)

        if (!isMatch) {
            return res.status(200).json({ error: 'Wrong Password!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                user: user,
                token
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}

export const createVision = async (req, res) => {

    const { visionTitle, visionDescription } = req.body

    try {

        if (!visionTitle) {
            return res.status(200).json({ error: 'vision title is required!', success: false })
        }

        if (!visionDescription) {
            return res.status(200).json({ error: 'vision description is required!', success: false })
        }

        const vision = await visionModel.create({ visionTitle: visionTitle, visionDescription: visionDescription })


        return res.status(200).json({
            message: 'successfully added!', success: true, data: {
                vision: vision
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const getAllVisionById = async (req, res) => {

    const { id } = req.query

    try {

        const vision = await visionModel.findById(id)

        if (!vision) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                vision: vision
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', success: false })
    }

}

export const updateVision = async (req, res) => {

    const { id, visionTitle, visionDescription } = req.body

    console.log(`hello ${id}`);

    try {

        if (!visionTitle) {
            return res.status(200).json({ error: 'vision title is required!', success: false })
        }

        if (!visionDescription) {
            return res.status(200).json({ error: 'vision description is required!', success: false })
        }

        const vision = await visionModel.findById(id)

        if (!vision) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        vision.visionTitle = visionTitle || vision.visionTitle
        vision.visionDescription = visionDescription || vision.visionDescription

        await vision.save()

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {

                vision: vision

            }
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }
}

export const getAllVision = async (req, res) => {

    try {

        const vision = await visionModel.find({})

        if (!vision) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                vision: vision
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}


//

export const createMision = async (req, res) => {

    const { missionTitle, missionDescription } = req.body

    try {

        if (!missionTitle) {
            return res.status(200).json({ error: 'mission title is required!', success: false })
        }

        if (!missionDescription) {
            return res.status(200).json({ error: 'mission description is required!', success: false })
        }

        const mission = await missionModel.create({ missionTitle: missionTitle, missionDescription: missionDescription })


        return res.status(200).json({
            message: 'successfully added!', success: true, data: {
                mission: mission
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const getAllMissionById = async (req, res) => {

    const { id } = req.query

    try {

        const mission = await missionModel.findById(id)

        if (!mission) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                mission: mission
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', success: false })
    }

}

export const updateMission = async (req, res) => {

    const { id, missionTitle, missionDescription } = req.body

    console.log(`hello ${id}`);

    try {

        if (!missionTitle) {
            return res.status(200).json({ error: 'vision title is required!', success: false })
        }

        if (!missionDescription) {
            return res.status(200).json({ error: 'vision description is required!', success: false })
        }

        const mission = await missionModel.findById(id)

        if (!mission) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        mission.missionTitle = missionTitle || mission.missionTitle
        mission.missionDescription = missionDescription || mission.missionDescription

        await mission.save()

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {

                mission: mission

            }
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }
}

export const getAllMission = async (req, res) => {

    try {

        const mission = await missionModel.find({})

        if (!mission) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                mission: mission
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}


export const getAllMision = async (req, res) => {

    try {

        const mision = await missionModel.find({})

        if (!mision) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                mision: mision
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}

//


export const createAboutUs = async (req, res) => {

    const { aboutTitle, aboutDescription } = req.body

    try {

        if (!aboutTitle) {
            return res.status(200).json({ error: 'about us title is required!', success: false })
        }

        if (!aboutDescription) {
            return res.status(200).json({ error: 'about us description is required!', success: false })
        }

        const about = await aboutUsModel.create({ aboutTitle: aboutTitle, aboutDescription: aboutDescription })


        return res.status(200).json({
            message: 'successfully added!', success: true, data: {
                about: about
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const getAllAboutUsById = async (req, res) => {

    const { id } = req.query

    try {

        const about = await aboutUsModel.findById(id)

        if (!about) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                about: about
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', success: false })
    }

}

export const updateAboutUs = async (req, res) => {

    const { id, aboutTitle, aboutDescription } = req.body

    console.log(`hello ${id}`);

    try {

        if (!aboutTitle) {
            return res.status(200).json({ error: 'about us title is required!', success: false })
        }

        if (!aboutDescription) {
            return res.status(200).json({ error: 'about us description is required!', success: false })
        }

        const about = await aboutUsModel.findById(id)

        if (!about) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        about.aboutTitle = aboutTitle || about.aboutTitle
        about.aboutDescription = aboutDescription || about.aboutDescription

        await about.save()

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {

                about: about

            }
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }
}

export const getAllAboutUs = async (req, res) => {

    try {

        const about = await aboutUsModel.find({})

        if (!about) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                about: about
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}

//

export const createValues = async (req, res) => {

    const { valuesIcon, valuesTitle, valuesDescription } = req.body

    try {

        if (!valuesIcon) {
            return res.status(200).json({ error: 'abbreviation is required!', success: false })
        }

        if (!valuesTitle) {
            return res.status(200).json({ error: 'value title is required!', success: false })
        }

        if (!valuesDescription) {
            return res.status(200).json({ error: 'value description is required!', success: false })
        }

        const values = await valueModel.create({ valuesIcon: valuesIcon, valuesTitle: valuesTitle, valuesDescription: valuesDescription })


        return res.status(200).json({
            message: 'successfully added!', success: true, data: {
                values: values
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const getAllValuesById = async (req, res) => {

    const { id } = req.query

    try {

        const values = await valueModel.findById(id)

        if (!values) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                values: values
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', success: false })
    }

}

export const updateValues = async (req, res) => {

    const { id, valuesIcon, valuesTitle, valuesDescription } = req.body

    console.log(`hello ${id}`);

    try {

        if (!valuesIcon) {
            return res.status(200).json({ error: 'value abbreviation is required!', success: false })
        }

        if (!valuesDescription) {
            return res.status(200).json({ error: 'value description is required!', success: false })
        }

        const values = await valueModel.findById(id)

        if (!values) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        values.valuesIcon = valuesIcon || values.valuesIcon
        values.valuesTitle = valuesTitle || values.valuesTitle
        values.valuesDescription = valuesDescription || values.valuesDescription

        await values.save()

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {

                values: values

            }
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }
}

export const getAllValues = async (req, res) => {

    try {

        const values = await valueModel.find({})

        if (!values) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                values: values
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}

export const removeValues = async (req, res) => {

    const { id } = req.query

    try {

        const values = await valueModel.findByIdAndDelete(id)

        if (!values) {
            return res.status(200).json({ error: 'No Information Found!', success: false })
        }

        return res.status(200).json({
            message: 'Deleted successfully', success: true, data: {
                values: values
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

//

export const createTeam = async (req, res) => {

    const { userTeamProfile, userTeamName, userTeamDescription } = req.body

    try {

        if (!userTeamName) {
            return res.status(200).json({ error: 'Member name field is required!', success: false })
        }

        if (!userTeamDescription) {
            return res.status(200).json({ error: 'Member description field is required!', success: false })
        }

        const team = await teamModel.create({ userTeamProfile: userTeamProfile, userTeamName: userTeamName, userTeamDescription: userTeamDescription })


        return res.status(200).json({
            message: 'successfully added!', success: true, data: {
                team: team
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const getAllTeamsById = async (req, res) => {

    const { id } = req.query

    try {

        const team = await teamModel.findById(id)

        if (!team) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                team: team
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', success: false })
    }

}

export const updateTeam = async (req, res) => {

    const { id, userTeamProfile, userTeamName, userTeamDescription } = req.body

    console.log(`hello ${id}`);

    try {

        if (!userTeamName) {
            return res.status(200).json({ error: 'Member name is required!', success: false })
        }

        if (!userTeamDescription) {
            return res.status(200).json({ error: 'Member description is required!', success: false })
        }

        const team = await teamModel.findById(id)

        if (!team) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        team.userTeamProfile = userTeamProfile || team.userTeamProfile
        team.userTeamName = userTeamName || team.userTeamName
        team.userTeamDescription = userTeamDescription || team.userTeamDescription

        await team.save()

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {

                team: team

            }
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }
}

export const getAllTeam = async (req, res) => {

    try {

        const team = await teamModel.find({})

        if (!team) {
            return res.status(200).json({ error: 'No information found!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                team: team
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!', })
    }

}

export const removeTeam = async (req, res) => {

    const { id } = req.query

    try {

        const team = await teamModel.findByIdAndDelete(id)

        if (!team) {
            return res.status(200).json({ error: 'No Information Found!', success: false })
        }

        return res.status(200).json({
            message: 'Deleted successfully', success: true, data: {
                team: team
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}

export const logout = async (req, res) => {

    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true
        })

        return res.status(200).json({message: 'logged out successfully!', success: true})

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })

    }


}
