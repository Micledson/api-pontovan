import { getRepository, Repository } from "typeorm";
import { Messages } from "../models/Messages";
import { GroupService } from "./GroupService";
import { UserService } from "./UserService";

class MessageService {
  private messageRepository: Repository<Messages>;

  constructor() {
    this.messageRepository = getRepository(Messages);
  }

  async create(userId: string, groupId: string, text: string) {
    const groupService = new GroupService();

    const userInGroup = await groupService.usersInGroup(groupId);

    const userIsGroup = userInGroup.users.find((user) => user.id === userId);
    if (!userIsGroup) {
      throw new Error("Without permission");
    }

    const userService = new UserService();
    const user = await userService.getUser(userId);

    const group = await groupService.getGroup(groupId);
    const message = this.messageRepository.create({ user, group, text });

    await this.messageRepository.save(message);
    return message;
  }

  async getUserMessage(userId: string) {
    const messages = await this.messageRepository.find({
      where: { user: userId },
    });
    return messages;
  }

  // async getGroupMessage()
}

export { MessageService };
