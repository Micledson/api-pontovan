import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";

class MessageController {
  async create(request: Request, response: Response) {
    const { userId, groupId, text } = request.body;

    const messageService = new MessageService();
    try {
      const message = await messageService.create(userId, groupId, text);
      return response.status(201).json(message);
    } catch (err) {
      return response.status(403).json(`${err.message}`);
    }
  }

  async getUserMessage(request: Request, response: Response) {
    const { userId } = request.body;

    const messageService = new MessageService();
    const messages = await messageService.getUserMessage(userId);

    return response.json(messages);
  }
}

export { MessageController };
