import express from "express";
import * as activityController from "../controller/activityController.js";
const route=express.Router();

route.post("/api/activity",activityController.createActivity);
route.get("/api/activity",activityController.getAllActivity);
route.get("/api/activity/:id",activityController.getActivityById);
export default route;