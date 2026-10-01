import AppError from "../error/AppError.js";
import * as activityRepository from "../repository/activityRepository.js";
import * as userRepository from "../repository/userRepository.js";
export const createActivity=async (id,body) => {
    const user=await userRepository.getById(id);
    if(user===undefined){
        throw new AppError("User Not Found",404);
    }
    const data=await activityRepository.createActivity(id,body);
    if(data===undefined){
        throw new AppError("Invalid activity",400);
    }
    return data;
}

export const getAllActivity=async () => {
    const activity=await activityRepository.getAllActivity();
    return activity;
}

export const getActivityById=async (id) => {
    const activity=await activityRepository.getActivityById(id);
    if(activity===undefined){
        throw new AppError("Activity Not Found",404);
    }
    return activity;
}