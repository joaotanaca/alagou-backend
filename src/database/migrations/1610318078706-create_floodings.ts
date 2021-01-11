import {MigrationInterface, QueryRunner} from "typeorm";

export class createFloodings1610318078706 implements MigrationInterface {
    name = 'createFloodings1610318078706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "floodings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "note" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "floodings"`);
    }

}
