import express from "express";
import { quarryViaMailSendingController } from "../Controllers/quarry.Controller.js";

const costumerRoutes = express.Router();
costumerRoutes.post("/send-quarry-viaMail-for-decor-work", quarryViaMailSendingController);

export default costumerRoutes;