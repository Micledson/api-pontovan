import { Router } from "express";

import { UserController } from "./controllers/UserController";

const userController = new UserController();

const routes = Router();

routes.post("/user", userController.create);
routes.get("/user/:email", userController.store);
routes.put("/user", userController.update);
routes.delete("/user", userController.delete);

export { routes };
