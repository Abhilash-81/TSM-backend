import TaskRepository from "../repository/taskRepository.js";


class TaskService{
    constructor(){
        this.taskRepository=new TaskRepository();
    }

    async getAllTasks(){
        try {
            const response=this.taskRepository.getAll();
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getTask(id){
        try {
            const response=this.taskRepository.get(id);
            return response;
        } catch (error) {
            throw error;
        }
    }


    async createTask(data){
        try {
            const response=this.taskRepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(data){
        try {
            const response=await this.taskRepository.destroy(data.id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(id,data){
        try {
            const response=await this.taskRepository.update(id,data);
            return response;
        } catch (error) {
            throw error;
        }
    }

}

export default TaskService

