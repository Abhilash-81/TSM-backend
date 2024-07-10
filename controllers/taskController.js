import TaskService from "../services/taskService.js";

const taskService=new TaskService();


export const getAllTasks =async (req,res)=>{
    try{
        const response=await taskService.getAllTasks();
        return res.status(201).json({
        success: true,
        message: "Success",
        data: response,
        err: {},
    });
    }catch(err){
        console.log(err);
        return res.status(500).json({
        message: "Something went wrong",
        data: {},
        success: false,
        err: err,
        });
    }
}



export const createTask =async (req,res)=>{
    try{
        const response=await taskService.createTask({
            title:req.body.title,
            description:req.body.description,
            complete:req.body.complete,
            dueDate:req.body.dueDate
        });
        return res.status(201).json({
        success: true,
        message: "Success",
        data: response,
        err: {},
    });
    }catch(err){
        console.log(err);
        return res.status(500).json({
        message: "Something went wrong",
        data: {},
        success: false,
        err: err,
        });
    }
}

export const deleteTask =async (req,res)=>{
    try{
        const response=await taskService.deleteTask({
            id:req.params.id,
        });
        return res.status(201).json({
        success: true,
        message: "Success",
        data: response,
        err: {},
    });
    }catch(err){
        console.log(err);
        return res.status(500).json({
        message: "Something went wrong",
        data: {},
        success: false,
        err: err,
        });
    }
}


export const getTask =async (req,res)=>{
    try{
        const response=await taskService.getTask(req.params.id);
        return res.status(201).json({
        success: true,
        message: "Success",
        data: response,
        err: {},
    });
    }catch(err){
        console.log(err);
        return res.status(500).json({
        message: "Something went wrong",
        data: {},
        success: false,
        err: err,
        });
    }
}

export const updateTask =async (req,res)=>{
    try{
        const response=await taskService.deleteTask(req.body.id,req.body.data);
        return res.status(201).json({
        success: true,
        message: "Success",
        data: response,
        err: {},
    });
    }catch(err){
        console.log(err);
        return res.status(500).json({
        message: "Something went wrong",
        data: {},
        success: false,
        err: err,
        });
    }
}
