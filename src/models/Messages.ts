import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Group } from "./Group";
import { User } from "./User";

@Entity()
class Messages {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.messsages)
  user: User;

  @ManyToOne(() => Group, (group) => group.messsages)
  group: Group;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Messages };
