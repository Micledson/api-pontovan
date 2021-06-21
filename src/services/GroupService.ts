import { getRepository, Repository } from "typeorm";
import { Group } from "../models/Group";
import { UserService } from "./UserService";
class GroupService {
  private groupService: Repository<Group>;

  constructor() {
    this.groupService = getRepository(Group);
  }

  async create(name: string) {
    const group = this.groupService.create({ name });

    await this.groupService.save(group);

    return group;
  }

  async addUserInGroup(groupId: string, userId: string) {
    let group = await this.groupService.findOne({
      where: { id: groupId },
      relations: ["users"],
    });

    const userService = new UserService();
    const user = await userService.getUser(userId);

    await this.groupService
      .createQueryBuilder()
      .relation("users")
      .of(group.id)
      .add(user)
      .catch(() => {
        throw new Error("User is already in the group");
      });

    group.users.map((us) => {
      delete us.password;
    });

    group.users = [...group.users, user];

    return group;
    // if (!group.users) {
    //   group.users = [user];
    //   await this.groupService.save(group);
    //   return group;
    // }

    // group.users = [...group.users, user];
    // await this.groupService.save(group);
    // return group;
  }

  async usersInGroup(groupId: string) {
    const group = await this.groupService.findOne({
      where: { id: groupId },
      relations: ["users"],
    });

    group.users.map((us) => {
      delete us.password;
    });

    return group;
  }

  async getGroup(groupId: string) {
    const group = await this.groupService.findOne({ where: { id: groupId } });

    return group;
  }
}

export { GroupService };
