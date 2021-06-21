"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
require("./database/connect");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.routes);
var PORT = process.env.PORT;
app.listen(PORT, function () { return console.log("http://localhost:" + PORT); });
