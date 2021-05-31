import { getRepository, Repository } from "typeorm";
import { User } from "../models/User";

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async create(name: string, email: string, password: string) {
    const user = this.userRepository.create({ name, email, password });

    await this.userRepository.save(user);

    delete user?.password;

    return user;
  }

  async store(email: string) {
    const user = await this.userRepository.findOne({ email });

    delete user?.password;

    return user;
  }

  async findUsers(name: string) {
    const users = await this.userRepository.find({ name });

    return users;
  }

  async update(id: string, name: string, email: string, password?: string) {
    const user = await this.userRepository.findOne(id);
    user.name = name;
    user.email = email;
    user.password = password;

    await this.userRepository.save(user);

    delete user.password;

    return user;
  }

  async delete(id: string) {
    const { affected } = await this.userRepository.delete({ id });

    if (!affected) {
      throw new Error("User not exists!");
    }

    return affected;
  }
}

export { UserService };
