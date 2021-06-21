import { Router } from "express";
import { GroupController } from "../controllers/GroupController";

const groupController = new GroupController();

const routes = Router();

routes.post("/group", groupController.create);
routes.put("/group", groupController.addUserInGroup);
routes.get("/group", groupController.getGroup);
routes.get("/usersgroup", groupController.usersInGroup);

export default routes;
