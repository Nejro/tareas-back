import{getConnection} from "../database/database";

const createTable = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
        `CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        isDone BOOLEAN NOT NULL DEFAULT false
        )`
        );
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getTasks = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, description, isDone FROM Tasks");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, description, isDone FROM Tasks where id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addTask = async (req,res) =>{
    try {
        const {description,isDone } = req.body; 
        if(description === undefined){ 
            res.status(400).json({message:"Bad Request. por favor llene el campo requerido"}) 
        }        
        const Tasks= {description,isDone};
        const connection = await getConnection();
        await connection.query("INSERT INTO Tasks SET ?", Tasks);
        res.json({ massage:"Task añadida" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const deleteTask = async (req, res) => {
    try {
        const  {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Tasks where id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const  {id} = req.params;
        const {description,isDone} = req.body;  
        if( id === undefined || description === undefined){ 
            res.status(400).json({message:"Bad Request. por favor llene el campo requerido"}) 
        } 
        const Tasks ={description,isDone}
        const connection = await getConnection();
        const result = await connection.query("UPDATE Tasks SET ? WHERE id = ?", [Tasks, id]);
        res.json(Tasks);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    createTable,
    getTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
};