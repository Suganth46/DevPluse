import * as authService from "../service/authService.js";
export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email,password);
        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
}

export const me= async (req,res,next) => {
    try {
        const {email}= req.user;
        const user= await authService.me(email);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
