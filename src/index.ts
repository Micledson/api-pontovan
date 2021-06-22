import "reflect-metadata";
import express from "express";

import { routes } from "./routes";

import "./database/connect";


const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
