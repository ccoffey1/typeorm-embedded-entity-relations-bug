import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1703869669092 implements MigrationInterface {
    name = 'Init1703869669092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounting" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "someField" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "parent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "departmentsAccountingid" integer, CONSTRAINT "REL_101fba5c173086a3975e0a299c" UNIQUE ("departmentsAccountingid"))`);
        await queryRunner.query(`CREATE TABLE "temporary_parent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "departmentsAccountingid" integer, CONSTRAINT "REL_101fba5c173086a3975e0a299c" UNIQUE ("departmentsAccountingid"), CONSTRAINT "FK_101fba5c173086a3975e0a299c3" FOREIGN KEY ("departmentsAccountingid") REFERENCES "accounting" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_parent"("id", "departmentsAccountingid") SELECT "id", "departmentsAccountingid" FROM "parent"`);
        await queryRunner.query(`DROP TABLE "parent"`);
        await queryRunner.query(`ALTER TABLE "temporary_parent" RENAME TO "parent"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parent" RENAME TO "temporary_parent"`);
        await queryRunner.query(`CREATE TABLE "parent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "departmentsAccountingid" integer, CONSTRAINT "REL_101fba5c173086a3975e0a299c" UNIQUE ("departmentsAccountingid"))`);
        await queryRunner.query(`INSERT INTO "parent"("id", "departmentsAccountingid") SELECT "id", "departmentsAccountingid" FROM "temporary_parent"`);
        await queryRunner.query(`DROP TABLE "temporary_parent"`);
        await queryRunner.query(`DROP TABLE "parent"`);
        await queryRunner.query(`DROP TABLE "accounting"`);
    }

}
