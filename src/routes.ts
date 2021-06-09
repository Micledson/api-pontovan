import { Router } from "express";

import UserRoutes from "./routes/UserRoutes";

const routes = Router();

routes.use(UserRoutes);

export { routes };
