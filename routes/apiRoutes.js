import express from "express";
const router = express.Router();
import {
    getAllTasks,
    createTask, 
    deleteTask, 
    updateTask,
    getTask
} from "../controllers/taskController.js";


router.get("/", getAllTasks);
router.get("/:id",getTask);
router.post("/",createTask);
router.delete("/:id",deleteTask);
router.patch("/",updateTask);

export default router;
