import { emailValidation ,passwordValidation } from "../utils/validation.js";
import AppError from "../error/AppError.js"
export const validateUser=(req,res,next)=>{
    const {email, password}=req.body;
    if(email===undefined || password===undefined){
        throw new AppError("Required register field is missing",400);
    }
    if(!emailValidation(email)){
        throw new AppError("Invalid Email",400);
    }
    if(!passwordValidation(password)){
        throw new AppError("Invalid Password only letter and number allowed at least 8",400);
    }
    next();
};