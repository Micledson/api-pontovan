import { Request, Response } from "express";

import jwt from "jsonwebtoken";

import { UserService } from "../services/UserService";

function generateToken(id: string) {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
}

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userService = new UserService();

    try {
      const user = await userService.create(name, email, password);

      return response.status(201).json({ user, token: generateToken(user.id) });
    } catch {
      return response.status(409).json("User already exists");
    }
  }

  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const userService = new UserService();

    try {
      const user = await userService.login(email, password);

      return response.status(200).json({ user, token: generateToken(user.id) });
    } catch (err) {
      return response.status(409).json(`${err.message}`);
    }
  }

  async findUsers(request: Request, response: Response) {
    const { name } = request.body;

    const userService = new UserService();

    const users = await userService.findUsers(name);

    return response.status(200).json(users);
  }

  async update(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const id = request.userId;

    try {
      const userService = new UserService();

      const user = await userService.update(id, name, email, password);
      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async delete(request: Request, response: Response) {
    const id = request.userId;

    const userService = new UserService();

    try {
      await userService.delete(id);
      return response.sendStatus(200);
    } catch (err) {
      return response.status(409).json(`${err}`);
    }
  }
}

export { UserController };
