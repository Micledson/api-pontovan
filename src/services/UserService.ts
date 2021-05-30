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

    return user;
  }

  async store(email: string) {
    const user = await this.userRepository.findOne({ email });

    console.log(user?.password);

    return user;
  }

  async update(id: string, email: string) {
    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ email })
      .where("id = :id", { id })
      .execute();

    return await this.store(email);
  }

  async delete(id: string) {
    const { affected } = await this.userRepository.delete({ id });

    if (!affected) {
      throw new Error("User not exists!");
    }
  }

  // async update(username: string, chat: boolean) {
  //   await this.settingsRepository
  //     .createQueryBuilder()
  //     .update(Setting)
  //     .set({ chat })
  //     .where("username = :username", { username })
  //     .execute();
  // }
}

export { UserService };
