"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MessageController_1 = require("../controllers/MessageController");
var messageController = new MessageController_1.MessageController();
var routes = express_1.Router();
routes.post("/message", messageController.create);
routes.get("/getUserMessage", messageController.getUserMessage);
exports.default = routes;
