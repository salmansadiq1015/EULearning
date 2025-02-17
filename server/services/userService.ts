import { Response } from "express";
import userModel from "../models/userModel";
import { redis } from "../utils/redis";

// Get User by Id
export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(200).send({
      success: true,
      user,
    });
  }
};

// Get All Users
export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(200).send({
    success: true,
    users,
  });
};

// update User Role Service
export const updateUserRoleService = async (
  res: Response,
  id: string,
  role: string
) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });

  res.status(200).send({
    success: true,
    user,
  });
};
