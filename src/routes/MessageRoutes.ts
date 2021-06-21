import { Router } from "express";
import { MessageController } from "../controllers/MessageController";

const messageController = new MessageController();

const routes = Router();

routes.post("/message", messageController.create);
routes.get("/getUserMessage", messageController.getUserMessage);

export default routes;
