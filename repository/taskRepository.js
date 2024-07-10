import Task from "../models/task.js";
import CrudRepository from "./crudRepository.js";

class TaskRepository extends CrudRepository {
  constructor() {
    super(Task);
  }
}

export default TaskRepository;
