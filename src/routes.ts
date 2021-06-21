import { Router } from "express";

import UserRoutes from "./routes/UserRoutes";
import GroupRoutes from "./routes/GroupRoutes";
import MessageRoutes from "./routes/MessageRoutes";

const routes = Router();

routes.use(MessageRoutes);
routes.use(GroupRoutes);
routes.use(UserRoutes);

export { routes };
