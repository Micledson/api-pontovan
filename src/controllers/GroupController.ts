import { Request, Response } from "express";
import { GroupService } from "../services/GroupService";

class GroupController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ Error: "Name Invalid" });
    }

    const groupService = new GroupService();
    const newGroup = await groupService.create(name);
    return response.status(201).json(newGroup);
  }

  async addUserInGroup(request: Request, response: Response) {
    const { groupId, userId } = request.body;
    const groupService = new GroupService();
    try {
      const group = await groupService.addUserInGroup(groupId, userId);
      return response.status(201).json(group);
    } catch (err) {
      return response.status(409).json(err.message);
    }
  }

  async usersInGroup(request: Request, response: Response) {
    const { groupId } = request.body;
    const groupService = new GroupService();

    const group = await groupService.usersInGroup(groupId);
    return response.status(200).json(group);
  }

  async getGroup(request: Request, response: Response) {
    const { groupId } = request.body;

    const groupService = new GroupService();

    const group = await groupService.getGroup(groupId);

    return response.json(group);
  }
}

export { GroupController };
