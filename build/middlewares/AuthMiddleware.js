"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AuthMiddleware = /** @class */ (function () {
    function AuthMiddleware() {
    }
    AuthMiddleware.prototype.authenticate = function (request, response, next) {
        try {
            var authorization = request.headers.authorization;
            var token = authorization.replace("Bearer", "").trim();
            var id = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET).id;
            request.userId = id;
            return next();
        }
        catch (err) {
            return response.status(401).json(err.message);
        }
    };
    return AuthMiddleware;
}());
exports.AuthMiddleware = AuthMiddleware;
