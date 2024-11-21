import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.Routes.js";
import servicesRoutes from "./Routes/services.Routes.js";
import costumerRoutes from "./Routes/costumer.Routes.js";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors({
    origin : '*',
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/sophisticate-decors/server/user-routes", userRoutes);
app.use("/sophisticate-decors/server/services-routes", servicesRoutes);
app.use("/sophisticate-decors/server/user-enquiry", costumerRoutes);