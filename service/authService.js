import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repository/authRepository.js";
import * as userRepository from "../repository/userRepository.js";
import AuthError from "../error/AppError.js";
import { env } from "../config/index.js";
export const register = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await authRepository.register(email, hashedPassword);
    if (user === undefined) {
        throw new AppError("Invalid email or Password", 404);
    }
    return user;
};

export const login = async (email, password) => {
    const user = await userRepository.getByEmail(email);
    if (user === undefined) {
        throw new AuthError("Invalid credentials", 400);
    }
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
        throw new AuthError("Invalid credentials", 400);
    }

    const token = jwt.sign(user, env.jwt.secret, {expiresIn:env.jwt.expiresIn});
    return token;
}