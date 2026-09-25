import express from "express";
import * as authController from "../controller/authController.js"
const route=express.Router();

route.post('/api/auth/register',authController.register);

export default route;