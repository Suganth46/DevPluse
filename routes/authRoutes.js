import express from "express";
import * as authController from "../controller/authController.js"
import { validateUser } from "../middleware/validateUser.js";
const route=express.Router();

route.post('/api/auth/register',validateUser,authController.register);
route.post('/api/auth/login',validateUser,authController.login);
export default route;