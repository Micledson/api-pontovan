import { Router } from "express";

import { UserController } from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const userController = new UserController();
const authMiddleware = new AuthMiddleware();
const routes = Router();

routes.post("/user", userController.create);
routes.get("/user", userController.login);
routes.get("/users", userController.findUsers);

routes.use(authMiddleware.authenticate);
routes.put("/user/", userController.update);
routes.delete("/user", userController.delete);

export default routes;
