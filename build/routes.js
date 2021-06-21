"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
var GroupRoutes_1 = __importDefault(require("./routes/GroupRoutes"));
var MessageRoutes_1 = __importDefault(require("./routes/MessageRoutes"));
var routes = express_1.Router();
exports.routes = routes;
routes.use(MessageRoutes_1.default);
routes.use(GroupRoutes_1.default);
routes.use(UserRoutes_1.default);
