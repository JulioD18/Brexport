// import { ApiError } from "@/types/interfaces/interfaces.common";
import { Request, Response, NextFunction } from "express";

// @desc Handles error responses from throw errors

export const errorResponse = (error: 'something bad', _req: Request, res: Response, _next: NextFunction) => {
   res.status(500).json({
      success: false,
      // data: error.data,
      // message: error.message,
   });
};