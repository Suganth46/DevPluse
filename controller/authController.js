import * as authService from "../service/authService.js";
export const register=async (req,res,next) => {
    try {
        const {email,password}=req.body;
        const user=authService.register(email,password);
        if(user===undefined){
            throw new Error("Invalid email or Password");
        }
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}