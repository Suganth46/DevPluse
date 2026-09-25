import bcrypt from "bcrypt";
import * as authRepository from "../repository/authRepository.js"
export const register=async (email,password) => {
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await authRepository.register(email,hashedPassword);
    return user;
};