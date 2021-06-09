import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export interface IToken {
  id: string;
}

class AuthMiddleware {
  authenticate(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;

      const token = authorization.replace("Bearer", "").trim();

      const { id } = jwt.verify(token, process.env.JWT_SECRET) as IToken;
      request.userId = id;

      return next();
    } catch (err) {
      return response.status(401).json(err.message);
    }
  }
}

export { AuthMiddleware };
