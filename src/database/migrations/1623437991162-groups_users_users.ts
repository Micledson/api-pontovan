import { MigrationInterface, QueryRunner } from "typeorm";

export class groupsUsersUsers1623437991162 implements MigrationInterface {
  name = "groupsUsersUsers1623437991162";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DROP INDEX `UQ_97672ac88f789774dd47f7c8be3` ON `users`"
    );
    await queryRunner.query(
      "CREATE TABLE `groups_users_users` (`groupsId` varchar(255) NOT NULL, `usersId` varchar(255) NOT NULL, INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` (`groupsId`), INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` (`usersId`), PRIMARY KEY (`groupsId`, `usersId`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)"
    );
    await queryRunner.query(
      "ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_6320d5cbd6f7702b2e78d38d6b8` FOREIGN KEY (`groupsId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION"
    );
    await queryRunner.query(
      "ALTER TABLE `groups_users_users` ADD CONSTRAINT `FK_0f3881cfe1ef94b0e435d1d72f9` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_0f3881cfe1ef94b0e435d1d72f9`"
    );
    await queryRunner.query(
      "ALTER TABLE `groups_users_users` DROP FOREIGN KEY `FK_6320d5cbd6f7702b2e78d38d6b8`"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "ALTER TABLE `groups` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP()"
    );
    await queryRunner.query(
      "DROP INDEX `IDX_0f3881cfe1ef94b0e435d1d72f` ON `groups_users_users`"
    );
    await queryRunner.query(
      "DROP INDEX `IDX_6320d5cbd6f7702b2e78d38d6b` ON `groups_users_users`"
    );
    await queryRunner.query("DROP TABLE `groups_users_users`");
    await queryRunner.query(
      "CREATE UNIQUE INDEX `UQ_97672ac88f789774dd47f7c8be3` ON `users` (`email`)"
    );
  }
}
