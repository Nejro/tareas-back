import  express  from "express";
import morgan from "morgan";
import cors from "cors"
//routes
import tareasRoutes from "./routes/tasks.routes";
const app=express();
app.use(cors());
//settings
app.set("port", 4000);
//Middlewwares
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/api/tasks", tareasRoutes);
export default app;