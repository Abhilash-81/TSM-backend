import User from "../models/user.js";
import asyncHandler from "express-async-handler";

export const getUser = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username })
    .select("-password")
    .lean()
    .exec();
  if (!user) {
    return res.status(400).json({ message: "No Users Found" });
  }
  res.status(200).json(user);
});
