import {MigrationInterface, QueryRunner} from "typeorm";

export class createFloodings1610581011362 implements MigrationInterface {
    name = 'createFloodings1610581011362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "temporary_floodings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "note" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIME), "flooding_id" varchar, CONSTRAINT "UQ_cf5a17d0350c77e4dd08a4c8c18" UNIQUE ("flooding_id"))`);
        await queryRunner.query(`INSERT INTO "temporary_floodings"("id", "name", "latitude", "longitude", "note", "createAt") SELECT "id", "name", "latitude", "longitude", "note", "createAt" FROM "floodings"`);
        await queryRunner.query(`DROP TABLE "floodings"`);
        await queryRunner.query(`ALTER TABLE "temporary_floodings" RENAME TO "floodings"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer, CONSTRAINT "UQ_1f7e56527d8e38e74dbe18590a5" UNIQUE ("flooding_id"))`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer, CONSTRAINT "UQ_1f7e56527d8e38e74dbe18590a5" UNIQUE ("flooding_id"), CONSTRAINT "FK_a9aa1825b2075f914aa1b394837" FOREIGN KEY ("flooding_id") REFERENCES "floodings" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "temporary_floodings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "note" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIME), "flooding_id" varchar, CONSTRAINT "UQ_cf5a17d0350c77e4dd08a4c8c18" UNIQUE ("flooding_id"), CONSTRAINT "FK_201416b5d688b2d5b26d67cee53" FOREIGN KEY ("flooding_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_floodings"("id", "name", "latitude", "longitude", "note", "createAt", "flooding_id") SELECT "id", "name", "latitude", "longitude", "note", "createAt", "flooding_id" FROM "floodings"`);
        await queryRunner.query(`DROP TABLE "floodings"`);
        await queryRunner.query(`ALTER TABLE "temporary_floodings" RENAME TO "floodings"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "floodings" RENAME TO "temporary_floodings"`);
        await queryRunner.query(`CREATE TABLE "floodings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "note" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIME), "flooding_id" varchar, CONSTRAINT "UQ_cf5a17d0350c77e4dd08a4c8c18" UNIQUE ("flooding_id"))`);
        await queryRunner.query(`INSERT INTO "floodings"("id", "name", "latitude", "longitude", "note", "createAt", "flooding_id") SELECT "id", "name", "latitude", "longitude", "note", "createAt", "flooding_id" FROM "temporary_floodings"`);
        await queryRunner.query(`DROP TABLE "temporary_floodings"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer, CONSTRAINT "UQ_1f7e56527d8e38e74dbe18590a5" UNIQUE ("flooding_id"))`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "floodings" RENAME TO "temporary_floodings"`);
        await queryRunner.query(`CREATE TABLE "floodings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "note" varchar NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIME))`);
        await queryRunner.query(`INSERT INTO "floodings"("id", "name", "latitude", "longitude", "note", "createAt") SELECT "id", "name", "latitude", "longitude", "note", "createAt" FROM "temporary_floodings"`);
        await queryRunner.query(`DROP TABLE "temporary_floodings"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "flooding_id" integer)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "flooding_id") SELECT "id", "name", "email", "password", "flooding_id" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
