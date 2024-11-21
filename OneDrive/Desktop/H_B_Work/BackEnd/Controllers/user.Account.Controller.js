import { DUser } from "../Models/User.Schema.js";
import bcryptHashedPassword from "../Utils/password.Hashed.js";
import bcrypt from "bcrypt";

export const userNewAccountController = async (req, res)=>{
    let {fullName, email, password, number} = req.body;
    try {
        const hashedPassword = await bcryptHashedPassword(password);
        password = hashedPassword;
        const createdUser = await DUser.create({fullName, email, password, number});
        return res.status(201).json({message:"Account Created Successfully", createdUser});
    } catch (error) {
        console.log("There is some errors in your user new account controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user new account controller plz fix the bug first ", error});
    }
}
export const userLoginController = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const validUser = await DUser.find(email);
        if(!validUser) {
            return res.status(400).json({message:"Invalid Email"});
        }
        const userPass = await bcrypt.compare(validUser.password, password);
        if(!userPass) {
            return res.status(400).json({message:"Invalid Email"});
        }
        const userToken = await generateUserToken(validUser);
        return res.status(200).cookie("auth_token", userToken, {maxAge:604800000}).json({message:"User Found Successfully ", user: validUser});
    } catch (error) {
        console.log("There is some errors in your user login controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user login controller plz fix the bug first ", error});
    }
}
export const userLogoutHandler = async (req, res)=>{
    const id = req.params.id;
    try {
        const user = await DUser.findById(id);
        return res.status(200).clearCookie("auth_token").json({message:"User Logout successfully"});
    } catch (error) {
        console.log("There is some errors in your user logout controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user logout controller plz fix the bug first ", error});
    }
}
export const userUpdateAccountHandler = async (req, res)=>{
    let {fullName, email, number, userImg} = req.body;
    const id = req.params.id;
    try {
        const updatedUser = await DUser.findById(id, {fullName, email, number, userImg});
        return res.status(201).json({message:"User Details Updated Successfully ", user:updatedUser});
    } catch (error) {
        console.log("There is some errors in your user update account controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user update account controller plz fix the bug first ", error});
    }
}
export const userAccountDeleteHandler = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const validUser = await DUser.find(email);
        if(!validUser) {
            return res.status(400).json({message:"Invalid Email"});
        }
        const userPass = await bcrypt.compare(validUser.password, password);
        if(!userPass) {
            return res.status(400).json({message:"Invalid Email"});
        }
        const deletedUser = await DUser.findByIdAndDelete(validUser._id);
        return res.status(200).json({message:"User Account Deleted Successfully"});
    } catch (error) {
        console.log("There is some errors in your user delete account controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user delete account controller plz fix the bug first ", error});
    }
}
export const userAuthController = async (req, res)=>{
    const loggedInUser = req.user;
    try {
       return res.status(200).json({message:"User have already logged in ", loggedInUser});
    } catch (error) {
        console.log("There is some errors in your user auth checker controller plz fix the bug first ", error);
        return res.status(500).json({message:"There is some errors in your user auth checker controller plz fix the bug first ", error});
    }
}
