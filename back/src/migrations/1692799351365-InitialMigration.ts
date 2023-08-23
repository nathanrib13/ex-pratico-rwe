import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692799351365 implements MigrationInterface {
    name = 'InitialMigration1692799351365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(65) NOT NULL, "email" character varying(75) NOT NULL, "password" character varying NOT NULL, "about" character varying NOT NULL, "faceboook" character varying NOT NULL, "twitter" character varying NOT NULL, "linkedin" character varying NOT NULL, "instagram" character varying NOT NULL, "profilePhoto" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
