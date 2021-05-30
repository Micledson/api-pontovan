import { Request, Response } from "express";

import { UserService } from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userService = new UserService();

    try {
      const user = await userService.create(name, email, password);
      return response.status(201).json(user);
    } catch {
      return response.status(409).json("User already exists");
    }
  }

  async store(request: Request, response: Response) {
    const { email } = request.params;

    const userService = new UserService();

    const user = await userService.store(email);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).json(user);
  }

  async update(request: Request, response: Response) {
    const { id, email } = request.body;

    const userService = new UserService();

    const user = await userService.update(id, email);

    delete user?.password;

    return response.status(200).json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const userService = new UserService();

    try {
      await userService.delete(id);
      return response.status(200);
    } catch (err) {
      return response.status(409).json(`${err}`);
    }
  }
}

export { UserController };