import * as activityService from "../service/activityService.js";

export const createActivity=async (req,res,next) => {
    try {
        const body=req.body;
        const {id}=req.user;
        const data=await activityService.createActivity(id,body);
        return res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

export const getAllActivity=async (req,res,next) => {
    try {
        const activity=await activityService.getAllActivity();
        return res.status(200).json(activity);
    } catch (error) {
        next(error);
    }
}

export const getActivityById=async (req,res,next)=>{
    try {
        const id=Number(req.params.id);
        const activity=await activityService.getActivityById(id);
        return res.status(200).json(activity);
    } catch (error) {
        next(error);
    }
}