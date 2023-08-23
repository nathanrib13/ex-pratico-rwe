import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUseTable1692800910466 implements MigrationInterface {
    name = 'AlterUseTable1692800910466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "faceboook" TO "facebook"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "facebook" TO "faceboook"`);
    }

}
