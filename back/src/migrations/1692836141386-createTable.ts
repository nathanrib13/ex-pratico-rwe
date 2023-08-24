import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1692836141386 implements MigrationInterface {
    name = 'CreateTable1692836141386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
    }

}
