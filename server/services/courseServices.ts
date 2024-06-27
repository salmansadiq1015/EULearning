import { Response } from "express";
import CourseModel from "../models/courseModel";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

// Create Course
export const createCourse = CatchAsyncError(
  async (data: any, res: Response) => {
    const course = await CourseModel.create(data);

    res.status(200).send({
      success: true,
      course,
    });
  }
);

// Get All Courses

export const getAllCoursesService = async (res: Response) => {
  const courses = await CourseModel.find().sort({ createdAt: -1 });

  res.status(200).send({
    success: true,
    courses,
  });
};
