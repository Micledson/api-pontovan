import { getRepository, Repository } from "typeorm";
import { User } from "../models/User";

import bcrypt from "bcryptjs";

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

  async login(email: string, password: string) {
    const user = await this.userRepository
      .findOne({ email })
      .then(async function (value) {
        if (!value) {
          throw new Error("Authentication failed");
        }

        const isValidPassword = await bcrypt.compareSync(
          password,
          value.password
        );

        if (!isValidPassword) {
          throw new Error("Authentication failed");
        }

        return value;
      });

    delete user.password;
    return user;
  }

  async getUser(id: string) {
    const user = await this.userRepository.findOne({ id });

    delete user?.password;

    return user;
  }

  async findUsers(name: string) {
    const users = await this.userRepository.find({ name });

    users.map((user) => delete user.password);

    return users;
  }

  async update(id: string, name: string, email: string, password?: string) {
    const user = await this.userRepository.findOne(id);

    user.name = name;
    user.email = email;
    user.password = password;

    await this.userRepository.save(user).catch(function (err) {
      throw new Error("Update failed");
    });

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
