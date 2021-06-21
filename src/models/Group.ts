import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Messages } from "./Messages";
import { User } from "./User";

@Entity("groups")
class Group {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToMany(() => Messages, (messages) => messages.group)
  messsages: Messages[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Group };
