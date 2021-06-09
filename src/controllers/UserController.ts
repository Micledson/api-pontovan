import { Request, Response } from "express";

import bcrypt from "bcryptjs";

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
    let { email, password } = request.body;

    const userService = new UserService();

    const user = await userService.store(email);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return response
        .status(409)
        .json({ message: "Email or Password incorrect!" });
    }

    delete user.password;
    return response.status(200).json(user);
  }

  async findUsers(request: Request, response: Response) {
    const { name } = request.body;

    const userService = new UserService();

    const users = await userService.findUsers(name);

    return response.status(200).json(users);
  }

  async update(request: Request, response: Response) {
    const { id, name, email, password } = request.body;
    const userService = new UserService();

    try {
      const user = await userService.update(id, name, email, password);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

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
