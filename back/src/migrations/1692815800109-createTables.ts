import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692815800109 implements MigrationInterface {
    name = 'CreateTables1692815800109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(65) NOT NULL, "email" character varying(75) NOT NULL, "password" character varying NOT NULL, "about" character varying NOT NULL, "facebook" character varying NOT NULL, "twitter" character varying NOT NULL, "linkedin" character varying NOT NULL, "instagram" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "imageName" character varying NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
