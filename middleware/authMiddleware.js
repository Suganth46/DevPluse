import jwt from "jsonwebtoken";
import {env} from "../config/index.js";
import AppError from "../error/AppError.js";

export const authenticate=(req,res,next) => {
    try {
        const authHeader=req.headers.authorization;
        if(authHeader===undefined){
            throw new AppError("Authorization header is missing",401);
        }
        const [scheme , token] = authHeader.split(" ");
        if(scheme===undefined || token===undefined){
            throw new AppError("Invalid authorization format",401);
        }
        const decoded= jwt.verify(token,env.jwt.secret);
        req.user=decoded;
        next();
    } catch (error) {
        throw new AppError("Invalid authorization token",401);
    }
}