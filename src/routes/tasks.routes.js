import {  Router } from "express";
import { methods as  taskController} from "../controllers/tasks.controllers";
const router= Router();

router.post("/createTable", taskController.createTable);
router.get("/getAll", taskController.getTasks);
router.get("/getById/:id", taskController.getTask);
router.post("/add", taskController.addTask);
router.delete("/deleteById/:id", taskController.deleteTask);
router.put("/updateById/:id", taskController.updateTask);

export default router;