import { config } from "dotenv";

config();

export default{
    host:process.env.HOST,
    database:process.env.database,
    user:process.env.USER 
}