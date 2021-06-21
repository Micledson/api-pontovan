import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMessages1623516262438 implements MigrationInterface {
    name = 'CreateMessages1623516262438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `messages` (`id` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `userId` varchar(255) NULL, `groupId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `messages` ADD CONSTRAINT `FK_4838cd4fc48a6ff2d4aa01aa646` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `messages` ADD CONSTRAINT `FK_438f09ab5b4bbcd27683eac2a5e` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `messages` DROP FOREIGN KEY `FK_438f09ab5b4bbcd27683eac2a5e`");
        await queryRunner.query("ALTER TABLE `messages` DROP FOREIGN KEY `FK_4838cd4fc48a6ff2d4aa01aa646`");
        await queryRunner.query("DROP TABLE `messages`");
    }

}
